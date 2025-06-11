#!/usr/bin/env python3
"""
Batch Translation Script for Eternal Collapse Theory Chapters 10-64
Helps manage the systematic translation of all remaining chapters
"""

import os
import json
from pathlib import Path
from datetime import datetime

# Define all remaining chapters with their English titles
CHAPTERS = {
    10: "Ghost Structures of the Self",
    11: "Dream as ψ-Reconstruction", 
    12: "The Role of Grief",
    13: "Collapse in Art",
    14: "Rituals of Disappearance",
    15: "The Archive of the Forgotten",
    16: "Reverse Engineering Oblivion",
    17: "The Mechanics of Rebuilding",
    18: "Entanglement Across Collapse",
    19: "Architecture of the Possible",
    20: "Seeds in the Ruins",
    21: "The Mirror Never Breaks",
    22: "Recursive Archeology", 
    23: "Collapse Loops",
    24: "The Future Remembers",
    26: "Fragmented I",
    27: "The Observer That Was",
    28: "Death as Teacher",
    29: "Love in the Ruins",
    30: "The Ethics of Letting Go",
    31: "Technologies of Forgetting",
    32: "The Sacred Ordinary",
    33: "Designing for Collapse",
    34: "ψ-Interfaces",
    35: "Liquid Organizations",
    36: "Economics of Dissolution",
    37: "Educational ψ-Systems",
    38: "Cities That Breathe",
    39: "Digital Decay Protocols",
    40: "Medicine of Collapse",
    41: "Fractals of Dissolution",
    42: "Topology of Tears",
    43: "Entropy Aesthetics",
    44: "Catastrophe Theory Applied",
    45: "The Calculus of Crumbling",
    46: "Phase Space Collapse",
    47: "Symmetry Breaking",
    48: "The Algebra of Absence",
    49: "Morning Dissolution Rituals",
    50: "Workplace Collapse",
    51: "Relationship Entropy",
    52: "Collapse Languages",
    53: "ψ-Field Engine", 
    54: "Recursive ψ-Creation",
    55: "Collapse Singularity",
    56: "φ-Encoded Self",
    57: "From Oblivion to Form",
    58: "Collapse Watches Itself",
    59: "Reality Never Dies",
    60: "Fragment to Cosmos",
    61: "Echo as God",
    62: "Collapse = Consciousness",
    63: "Reclaiming ψ",
    64: "Eternal Collapse is the Only Eternity"
}

# Translation mapping for common terms
TERM_GLOSSARY = {
    "collapse": "坍缩",
    "dissolution": "溶解",
    "reconstruction": "重构",
    "echo": "回声",
    "ruins": "废墟",
    "memory": "记忆",
    "ghost": "幽灵",
    "structure": "结构",
    "self": "自我",
    "dream": "梦",
    "grief": "悲伤",
    "art": "艺术",
    "ritual": "仪式",
    "disappearance": "消失",
    "archive": "档案",
    "forgotten": "被遗忘",
    "oblivion": "湮灭",
    "entanglement": "纠缠",
    "architecture": "架构",
    "mirror": "镜子",
    "recursive": "递归",
    "loop": "回路",
    "future": "未来",
    "fragment": "碎片",
    "observer": "观察者",
    "death": "死亡",
    "love": "爱",
    "ethics": "伦理",
    "sacred": "神圣",
    "ordinary": "平凡",
    "interface": "界面",
    "liquid": "液态",
    "organization": "组织",
    "economics": "经济学",
    "education": "教育",
    "city": "城市",
    "digital": "数字",
    "decay": "衰变",
    "protocol": "协议",
    "medicine": "医学",
    "fractal": "分形",
    "topology": "拓扑",
    "tears": "眼泪",
    "entropy": "熵",
    "aesthetics": "美学",
    "catastrophe": "突变",
    "calculus": "微积分",
    "phase space": "相空间",
    "symmetry": "对称性",
    "algebra": "代数",
    "absence": "缺席",
    "morning": "晨间",
    "workplace": "工作场所",
    "relationship": "关系",
    "language": "语言",
    "engine": "引擎",
    "singularity": "奇点",
    "consciousness": "意识",
    "eternity": "永恒"
}

def get_chapter_info(chapter_num):
    """Get information about a specific chapter"""
    # Determine which part the chapter belongs to
    if 1 <= chapter_num <= 8:
        part = "part-01-nature-of-collapse"
        part_name = "坍缩的本质"
    elif 9 <= chapter_num <= 16:
        part = "part-02-echoes-in-ruins"
        part_name = "废墟中的回声"
    elif 17 <= chapter_num <= 24:
        part = "part-03-reconstructive-collapse"
        part_name = "重构性坍缩"
    elif 25 <= chapter_num <= 32:
        part = "part-04-self-and-dissolution"
        part_name = "自我与溶解"
    elif 33 <= chapter_num <= 40:
        part = "part-05-toward-eternal-structure"
        part_name = "走向永恒结构"
    elif 41 <= chapter_num <= 48:
        part = "part-06-divine-disintegration"
        part_name = "神圣解体"
    elif 49 <= chapter_num <= 56:
        part = "part-07-eternal-structures"
        part_name = "永恒结构"
    elif 57 <= chapter_num <= 64:
        part = "part-08-final-reemergence"
        part_name = "最终再现"
    else:
        return None
        
    return {
        "chapter_num": chapter_num,
        "part": part,
        "part_name": part_name,
        "english_title": CHAPTERS.get(chapter_num, "Unknown")
    }

def generate_translation_queue():
    """Generate a queue of chapters to translate"""
    queue = []
    for chapter_num in sorted(CHAPTERS.keys()):
        info = get_chapter_info(chapter_num)
        if info:
            en_path = f"docs/psi-theory-of-eternal-collapse/{info['part']}/chapter-{chapter_num:02d}-*.md"
            zh_path = f"i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-theory-of-eternal-collapse/{info['part']}/chapter-{chapter_num:02d}-*.md"
            
            queue.append({
                "chapter_num": chapter_num,
                "part": info['part'],
                "part_name": info['part_name'],
                "english_title": info['english_title'],
                "en_pattern": en_path,
                "zh_pattern": zh_path,
                "status": "pending"
            })
    
    return queue

def save_translation_queue(queue, filename="translation_queue.json"):
    """Save the translation queue to a JSON file"""
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump({
            "created": datetime.now().isoformat(),
            "total_chapters": len(queue),
            "queue": queue
        }, f, ensure_ascii=False, indent=2)

def generate_progress_report(queue):
    """Generate a progress report"""
    by_part = {}
    for item in queue:
        part = item['part_name']
        if part not in by_part:
            by_part[part] = {"total": 0, "completed": 0}
        by_part[part]["total"] += 1
        if item["status"] == "completed":
            by_part[part]["completed"] += 1
    
    print("\n=== 翻译进度报告 ===")
    print(f"总章节: {len(queue)}")
    print(f"时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
    
    for part, stats in by_part.items():
        progress = stats["completed"] / stats["total"] * 100 if stats["total"] > 0 else 0
        print(f"{part}: {stats['completed']}/{stats['total']} ({progress:.1f}%)")

if __name__ == "__main__":
    # Generate translation queue
    queue = generate_translation_queue()
    
    # Save queue to file
    save_translation_queue(queue)
    
    # Print summary
    print(f"Generated translation queue for {len(queue)} chapters")
    print(f"Queue saved to translation_queue.json")
    
    # Show sample entries
    print("\nSample queue entries:")
    for item in queue[:5]:
        print(f"  Chapter {item['chapter_num']:02d}: {item['english_title']}")
        print(f"    Part: {item['part_name']}")
        print(f"    Status: {item['status']}")
        print()
    
    # Generate progress report
    generate_progress_report(queue)