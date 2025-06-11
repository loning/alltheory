#!/usr/bin/env python3
"""
Translation Management Script for Ψhē Theory of Eternal Collapse
Tracks and manages the translation of all 64 chapters from English to Chinese
"""

import os
import json
from pathlib import Path

# Define the structure
PARTS = {
    "part-01-nature-of-collapse": {
        "title_en": "Part I: The Nature of Collapse",
        "title_zh": "第一部分：坍缩的本质",
        "chapters": list(range(1, 9))
    },
    "part-02-echoes-in-ruins": {
        "title_en": "Part II: Echoes in the Ruins", 
        "title_zh": "第二部分：废墟中的回声",
        "chapters": list(range(9, 17))
    },
    "part-03-reconstructive-collapse": {
        "title_en": "Part III: Reconstructive Collapse",
        "title_zh": "第三部分：重构性坍缩", 
        "chapters": list(range(17, 25))
    },
    "part-04-self-and-dissolution": {
        "title_en": "Part IV: Self and Dissolution",
        "title_zh": "第四部分：自我与溶解",
        "chapters": list(range(25, 33))
    },
    "part-05-toward-eternal-structure": {
        "title_en": "Part V: Toward Eternal Structure",
        "title_zh": "第五部分：走向永恒结构",
        "chapters": list(range(33, 41))
    },
    "part-06-divine-disintegration": {
        "title_en": "Part VI: Divine Disintegration",
        "title_zh": "第六部分：神圣解体",
        "chapters": list(range(41, 49))
    },
    "part-07-eternal-structures": {
        "title_en": "Part VII: Eternal Structures", 
        "title_zh": "第七部分：永恒结构",
        "chapters": list(range(49, 57))
    },
    "part-08-final-reemergence": {
        "title_en": "Part VIII: The Final Reemergence",
        "title_zh": "第八部分：最终再现",
        "chapters": list(range(57, 65))
    }
}

# Base paths
EN_BASE = Path("docs/psi-theory-of-eternal-collapse")
ZH_BASE = Path("i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-theory-of-eternal-collapse")

def check_translation_status():
    """Check which chapters have been translated"""
    status = {}
    total_translated = 0
    
    for part_dir, part_info in PARTS.items():
        part_status = {
            "part_index": False,
            "chapters": {}
        }
        
        # Check part index
        zh_part_index = ZH_BASE / part_dir / "index.md"
        if zh_part_index.exists():
            part_status["part_index"] = True
            
        # Check chapters
        for chapter_num in part_info["chapters"]:
            chapter_pattern = f"chapter-{chapter_num:02d}-*.md"
            zh_chapter_files = list((ZH_BASE / part_dir).glob(chapter_pattern))
            
            if zh_chapter_files:
                part_status["chapters"][chapter_num] = True
                total_translated += 1
            else:
                part_status["chapters"][chapter_num] = False
                
        status[part_dir] = part_status
        
    return status, total_translated

def print_status_report():
    """Print a formatted status report"""
    status, total = check_translation_status()
    
    print("="*60)
    print("永恒坍缩理论 Translation Status")
    print("="*60)
    print(f"\n总进度: {total}/64 章节已翻译 ({total/64*100:.1f}%)\n")
    
    for part_dir, part_info in PARTS.items():
        part_status = status[part_dir]
        translated = sum(1 for v in part_status["chapters"].values() if v)
        total_chapters = len(part_info["chapters"])
        
        print(f"\n{part_info['title_zh']} ({part_info['title_en']})")
        print(f"  部分索引: {'✓' if part_status['part_index'] else '✗'}")
        print(f"  章节进度: {translated}/{total_chapters}")
        
        # Show chapter details
        missing = [ch for ch, done in part_status["chapters"].items() if not done]
        if missing:
            print(f"  缺失章节: {', '.join(map(str, missing))}")

def get_next_untranslated():
    """Get the next chapter that needs translation"""
    status, _ = check_translation_status()
    
    for part_dir, part_info in PARTS.items():
        part_status = status[part_dir]
        
        # Check if part index needs translation
        if not part_status["part_index"]:
            return ("part_index", part_dir)
            
        # Check chapters
        for chapter_num in sorted(part_info["chapters"]):
            if not part_status["chapters"].get(chapter_num, False):
                return ("chapter", part_dir, chapter_num)
                
    return None

def list_source_files():
    """List all English source files that need translation"""
    files = []
    
    for part_dir in PARTS.keys():
        # Part index
        part_index = EN_BASE / part_dir / "index.md"
        if part_index.exists():
            files.append(str(part_index))
            
        # Chapters
        chapter_files = sorted((EN_BASE / part_dir).glob("chapter-*.md"))
        files.extend(str(f) for f in chapter_files)
        
    return files

if __name__ == "__main__":
    print_status_report()
    
    next_item = get_next_untranslated()
    if next_item:
        if next_item[0] == "part_index":
            print(f"\n下一个待翻译: {PARTS[next_item[1]]['title_zh']} 索引文件")
        else:
            print(f"\n下一个待翻译: 第{next_item[2]:02d}章 在 {PARTS[next_item[1]]['title_zh']}")
    else:
        print("\n所有翻译已完成！")
        
    # Save status to file
    status, total = check_translation_status()
    with open("translation_status.json", "w", encoding="utf-8") as f:
        json.dump({
            "total_translated": total,
            "percentage": total/64*100,
            "status": status
        }, f, ensure_ascii=False, indent=2)