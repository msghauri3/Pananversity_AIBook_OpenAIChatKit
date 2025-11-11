---
sidebar_position: 1
title: "Why Git Matters with AI Tools"
description: "Understand why Git keeps you safe when working with AI"

# HIDDEN SKILLS METADATA
skills:
  - name: "Conceptual Understanding of Version Control"
    proficiency_level: "A1"
    category: "Conceptual"
    bloom_level: "Understand"
    digcomp_area: "Information Literacy"
    measurable_at_this_level: "Student can explain what Git does in simple words"

  - name: "Safety-First Mindset for AI Development"
    proficiency_level: "A1"
    category: "Soft"
    bloom_level: "Understand"
    digcomp_area: "Problem-Solving"
    measurable_at_this_level: "Student knows to save before AI makes big changes"

learning_objectives:
  - objective: "Explain why version control is essential with AI"
    proficiency_level: "A1"
    bloom_level: "Understand"
    assessment_method: "Explain Git's role in simple terms"

  - objective: "Understand Git as a safety net for experiments"
    proficiency_level: "A1"
    bloom_level: "Understand"
    assessment_method: "Explain how commits work like save points"

cognitive_load:
  new_concepts: 5
  assessment: "5 concepts (Git, commits, undo, backup, safety) within A1 limit ✓"

# Generation metadata
generated_by: "lesson-writer"
source_spec: "specs/012-chapter-8-git-github-aidd/plan.md"
created: "2025-11-05"
last_modified: "2025-11-05"
version: "2.0.0"
---

# Why Git Matters with AI Tools

## The Problem

Your AI assistant just changed 50 lines of code. It looks good, but you're not sure if it works. You need answers:
- What exactly changed?
- Can I test it safely?
- If it breaks, can I undo it?

**This is why you need Git.**

---

## What Git Does

Git is like an **undo button that never forgets**.

Imagine:
- You write code
- You save a snapshot (called a "commit")
- You make more changes
- You save another snapshot
- Something breaks
- You go back to any old snapshot instantly

**That's Git.** It's a time machine for your code.

---

## Why AI Makes This Essential

When you code alone, changes happen slowly. You remember what you did.

When you work with AI:
- Changes happen in seconds
- AI can modify many files at once
- Sometimes AI makes mistakes
- You need a way to undo quickly

**Git gives you that safety.**

---

## A Simple Example

**Without Git**:

You: "AI, make my code faster"
AI: Changes 20 lines
You: Test it... it crashes!
Problem: You don't remember the original code
Result: You're stuck

**With Git**:

You: Save current code (commit)
You: "AI, make my code faster"
AI: Changes 20 lines
You: Test it... it crashes!
You: "Undo those changes"
AI: Returns to your saved version
Result: You're safe

---

## Five Key Ideas

### 1. Commits Are Save Points

A **commit** = a snapshot of your code at one moment.

Like a video game save point. You can always return to it.

### 2. You Can Always Undo

Made a mistake? Undo it. Even if it was days ago.

Git keeps all your old versions safe.

### 3. See Exactly What Changed

Git shows you what lines were added or removed.

Before accepting AI's changes, you review them first.

### 4. Test Changes Safely

Create a "branch" (a copy of your code). Test AI's changes there.

If good: Keep them
If bad: Delete the branch

Your main code stays untouched.

### 5. GitHub = Cloud Backup

**GitHub** stores your code online.

If your computer breaks, your code is safe.

---

## Real Example

**Situation**: You built a calculator. It works. AI offers to make it "better."

**You ask AI**: "Show me what you'll change"

**AI shows you**: "I'll replace this:
```python
def add(a, b):
    return a + b
```

With this:
```python
import numpy as np
def add(a, b):
    return np.add(a, b)
```

**You think**: "Hmm, will this work with empty numbers?"

**You say**: "Test it with empty lists first"

**AI tests**: "Good catch! The NumPy version crashes with empty lists. Let me fix that."

**Result**: Because you asked AI to show and test changes first, you avoided a bug. Git made this workflow possible.

---

## Why This Matters for You

With Git + AI, you can:
- **Experiment freely** - try AI's ideas without fear
- **Undo mistakes** - go back if something breaks
- **Learn safely** - see what changed and understand why
- **Build confidence** - know you can always recover

Without Git? AI feels risky.
With Git? AI feels powerful.

---

## Try With AI

Let's practice understanding Git through conversation.

**Tool**: ChatGPT, Claude Code, or Gemini CLI

### Exercise 1: The Basics

Ask your AI:
```
Explain Git in simple words. Use an analogy
like video game saves or Google Docs history.
```

What to expect: Simple explanation without jargon.

### Exercise 2: Why It Helps with AI

Ask your AI:
```
I'm learning to code with AI assistants.
What are the risks when AI generates code?
How does Git help me stay safe?
Give me a real example.
```

What to expect: AI explains risks and how Git protects you.

### Exercise 3: Test Your Understanding

Ask your AI:
```
I'm explaining Git to a friend who never used it.
Help me describe it in one simple sentence.
```

What to expect: AI helps you find the simplest explanation.

---

## Remember

Git = Safety net for AI work

**Key points**:
- Commits = Save points
- You can always undo
- Test changes before accepting
- GitHub = Cloud backup
