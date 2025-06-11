#!/usr/bin/env python3
"""
Batch Translation Helper for Eternal Collapse Theory
Helps create translation templates for multiple chapters at once
"""

import os
import re
from pathlib import Path

def extract_chapter_metadata(file_path):
    """Extract title and key metadata from English chapter"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract title
    title_match = re.search(r'title:\s*"([^"]+)"', content)
    sidebar_match = re.search(r'sidebar_label:\s*"([^"]+)"', content)
    
    # Extract chapter number
    chapter_num_match = re.search(r'Chapter\s+(\d+):', title_match.group(1) if title_match else '')
    
    # Extract main heading
    heading_match = re.search(r'^#\s+Chapter\s+\d+:\s+(.+)$', content, re.MULTILINE)
    
    # Extract abstract
    abstract_match = re.search(r'## Abstract\s*\n\n(.+?)(?=\n\n---|\n\n##)', content, re.DOTALL)
    
    return {
        'title': title_match.group(1) if title_match else None,
        'sidebar_label': sidebar_match.group(1) if sidebar_match else None,
        'chapter_num': int(chapter_num_match.group(1)) if chapter_num_match else None,
        'heading': heading_match.group(0) if heading_match else None,
        'abstract': abstract_match.group(1).strip() if abstract_match else None,
        'file_name': Path(file_path).name
    }

def generate_translation_template(en_file_path, chapter_info):
    """Generate a template for translating a chapter"""
    ch_num = chapter_info['chapter_num']
    
    # Common translations for chapter titles
    title_translations = {
        "What Is Collapse?": "什么是坍缩？",
        "Ψ as Self-Referential Disintegration": "Ψ作为自指性解体",
        "The Myth of Permanence": "永恒的神话",
        "Entropy as Language": "熵作为语言",
        "The Collapse of Time": "时间的坍缩",
        "The Observer's Burden": "观察者的负担",
        "Symbol, Trace, Echo": "符号、痕迹、回声",
        "Collapse as Choice": "坍缩作为选择",
        # Add more as needed
    }
    
    template = f"""---
title: "第{ch_num:02d}章：[TRANSLATE TITLE]"
sidebar_label: "{ch_num:02d}. [TRANSLATE SHORT TITLE]"
---

# 第{ch_num:02d}章：[TRANSLATE TITLE]

> *[TRANSLATE OPENING QUOTE]*

## 摘要

[TRANSLATE ABSTRACT]

---

[Continue translating the rest of the chapter, preserving all mathematical formulas, definitions, theorems, proofs, exercises, and section structure]
"""
    
    return template

def create_batch_templates(start_chapter, end_chapter):
    """Create translation templates for a range of chapters"""
    en_base = Path("docs/psi-theory-of-eternal-collapse")
    zh_base = Path("i18n/zh-Hans/docusaurus-plugin-content-docs/current/psi-theory-of-eternal-collapse")
    
    templates = []
    
    for part_dir in en_base.iterdir():
        if not part_dir.is_dir() or not part_dir.name.startswith('part-'):
            continue
            
        for chapter_file in sorted(part_dir.glob('chapter-*.md')):
            chapter_info = extract_chapter_metadata(chapter_file)
            ch_num = chapter_info['chapter_num']
            
            if ch_num and start_chapter <= ch_num <= end_chapter:
                # Check if already translated
                zh_chapter_path = zh_base / part_dir.name / chapter_file.name
                if not zh_chapter_path.exists():
                    template = {
                        'chapter_num': ch_num,
                        'en_path': str(chapter_file),
                        'zh_path': str(zh_chapter_path),
                        'part': part_dir.name,
                        'template': generate_translation_template(chapter_file, chapter_info)
                    }
                    templates.append(template)
    
    return sorted(templates, key=lambda x: x['chapter_num'])

def save_templates(templates, output_dir='translation_templates'):
    """Save templates to files for easier processing"""
    output_path = Path(output_dir)
    output_path.mkdir(exist_ok=True)
    
    for template in templates:
        filename = f"chapter_{template['chapter_num']:02d}_template.md"
        with open(output_path / filename, 'w', encoding='utf-8') as f:
            f.write(f"# Translation Template for Chapter {template['chapter_num']}\n")
            f.write(f"# English source: {template['en_path']}\n")
            f.write(f"# Chinese target: {template['zh_path']}\n\n")
            f.write(template['template'])
    
    # Create a summary file
    with open(output_path / 'translation_summary.txt', 'w', encoding='utf-8') as f:
        f.write("Translation Templates Created:\n\n")
        for template in templates:
            f.write(f"Chapter {template['chapter_num']:02d} - {template['part']}\n")
            f.write(f"  EN: {template['en_path']}\n")
            f.write(f"  ZH: {template['zh_path']}\n\n")

if __name__ == "__main__":
    # Create templates for next batch of chapters
    templates = create_batch_templates(6, 10)  # Next 5 chapters
    
    print(f"Created {len(templates)} translation templates")
    
    save_templates(templates)
    print(f"\nTemplates saved to translation_templates/")
    
    # Show what needs translation
    for template in templates:
        print(f"Chapter {template['chapter_num']:02d} in {template['part']}")