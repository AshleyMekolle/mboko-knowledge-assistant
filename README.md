# Mboko Media Group

**Our stories. Our world.**

![Mboko Media Group](images/hero.jpg)

Documentaries · Interviews · Digital series · Editorial · Branded campaigns | Douala, Cameroon

> **Fictional company.** Mboko Media Group is not a real business. It was created as a realistic, fully documented company to power the [Mboko Knowledge Assistant](#about-this-repository), an internal AI assistant built with retrieval-augmented generation (RAG). Every policy, person and production here is invented.

## Who we are

Mboko Media Group is a Cameroonian media and creative production company based in Douala. We create stories that reflect African people, culture, business, creativity and everyday life, and we share them with audiences in Cameroon and across Africa.

We work in both French and English, the way Cameroon does. A story might start in a Bonabéri workshop, a Yaoundé start-up or a village festival in the West Region, and end up on screens across the continent.

| | |
|---|---|
| ![Street life in Douala](images/douala-street.jpg) | ![Mboko crew filming on location](images/on-set.jpg) |

## Mission

**Tell authentic African stories through thoughtful, engaging and responsible media.**

We believe the people closest to a story should shape how it is told. Our job is to listen carefully, report accurately and give those stories the craft they deserve.

## Our values

| Value | What it means at Mboko |
|---|---|
| **Authenticity** | We tell stories from the inside, with the people who live them, never about them from a distance. |
| **Accuracy** | Every fact is checked, every source is respected, and every mistake is corrected openly. |
| **Respect** | We protect the dignity of the people in our stories, especially when they are vulnerable. |
| **Community** | Our audience is a community, not a market. We create with them, not only for them. |
| **Craft** | Good intentions are not enough. We hold our sound, image and writing to a high standard. |

## What we make

| | | |
|---|---|---|
| ![Interview production](images/interview.jpg) | ![Editorial team at work](images/editorial.jpg) | ![Creative and design studio](images/creative.jpg) |

| Format | Description |
|---|---|
| **Documentaries** | Long-form films on culture, history, enterprise and social change |
| **Interviews** | Conversations with artists, founders, leaders and everyday people with something to say |
| **Digital video series** | Short, regular episodes made for social platforms and mobile viewing |
| **Editorial features** | Researched articles, profiles and lifestyle pieces |
| **Branded campaigns** | Story-led campaigns for organisations that share our values |

### Flagship productions

- **Mboa Makers**: a weekly series on young Cameroonian creators, from fashion designers to app developers
- **Rues de Douala**: a street-level documentary series on the people who keep the city moving
- **Market Voices**: interviews with traders and entrepreneurs in Central African markets
- **Racines**: a documentary series on heritage, music and tradition across Cameroon's regions

## How we are organised

Mboko has six departments. Each one owns its own policies and procedures, which together make up the company knowledge base.

| Department | What it does | Key documents |
|---|---|---|
| 🎬 **Production** | Plans and produces documentaries, interviews and video series | Production schedules, filming procedures, equipment policy, shoot checklists, publishing handover |
| 📰 **Editorial** | Researches, writes and verifies stories, and protects editorial standards | Editorial guidelines, fact-checking policy, corrections procedure, approval requirements, writing standards |
| 🎨 **Creative and Design** | Builds visual identities, graphics, campaign concepts and creative assets | Brand guidelines, design standards, asset requirements, creative review procedure |
| 🤝 **Partnerships and Marketing** | Manages clients, sponsorships, advertising and distribution partners | Partnership policy, sponsorship packages, client onboarding, campaign approval rules |
| 👥 **People and Administration** | Handles recruitment, onboarding, leave, workplace policy and staff records | Employee handbook, leave policy, code of conduct, onboarding guide, workplace procedures |
| 💼 **Finance and Operations** | Oversees budgets, reimbursements, purchasing, travel and planning | Expense policy, reimbursement rules, purchasing procedure, travel policy, budget approvals |

![The Mboko team](images/team.jpg)

## About this repository

This repository is Mboko's **internal knowledge base**: the policies, handbooks and procedures that every employee relies on. It is also the data source for the **Mboko Knowledge Assistant**, an AI assistant that answers employees' questions from these documents and cites its sources.

Employees will be able to ask questions like:

- *Who must approve a video before it is published?*
- *How many days of annual leave do I get?*
- *How do I claim back travel expenses?*
- *Can we use a client's logo in our own promotional material?*
- *What do I need to complete in my first week?*

When the documents do not answer a question, the assistant says so instead of inventing a policy.

### The knowledge base

The knowledge base contains **20 interconnected documents** across the six departments, all sharing one set of fictional people, project codes, approval limits and dates. Browse it from the [knowledge base index](documents/README.md).

| Folder | Documents |
|---|---|
| Company-wide | Index, company profile and glossary, organization directory, approval authority matrix |
| Production | Planning, scheduling and project register; equipment checkout; footage storage and handover |
| Editorial | Standards and fact-checking; interview consent; review, bilingual publishing and corrections |
| Creative and Design | Brand identity and design approval; asset naming, storage and licensing |
| Partnerships and Marketing | Sponsorship and campaign workflow; social media publishing |
| People and Administration | Employee handbook; leave and attendance; recruitment, onboarding and offboarding |
| Finance and Operations | Expense claims and petty cash; procurement, vendors and invoices; budget planning and control |

An [evaluation set of 47 questions](tests/knowledge_base/evaluation_questions.json) will be used to test the assistant. It covers direct facts, procedures, approval thresholds, register records, questions that need two or more documents, and 9 questions the documents cannot answer.

### How the assistant works

```mermaid
flowchart LR
    A[Company documents] --> B[Ingestion<br>extract, clean, chunk]
    B --> C[Embeddings]
    C --> D[(PostgreSQL<br>+ pgvector)]
    Q[Employee question] --> E[Retrieve relevant passages]
    D --> E
    E --> F[LLM on Groq<br>grounded answer]
    F --> G[Answer with citations<br>or not found]
```

**Stack:** Python, FastAPI, PostgreSQL with pgvector, Groq, pytest and Docker

### Repository structure

```
mboko-knowledge-assistant/
├── documents/
│   ├── README.md                     # Knowledge base index (COM-IDX-001)
│   ├── company/
│   ├── production/
│   ├── editorial/
│   ├── creative-and-design/
│   ├── partnerships-and-marketing/
│   ├── people-and-administration/
│   └── finance-and-operations/
├── tests/
│   └── knowledge_base/
│       └── evaluation_questions.json
├── images/
└── README.md
```

## Roadmap

- [x] **Phase 1:** Company knowledge base: 20 documents across six departments, plus a 47-question evaluation set
- [ ] **Phase 2:** Project foundation: FastAPI app, configuration and database services
- [ ] **Phase 3:** Document ingestion: loading, cleaning, chunking and source metadata
- [ ] **Phase 4:** Embeddings, vector storage and retrieval
- [ ] **Phase 5:** Grounded answers with citations and "not found" responses
- [ ] **Phase 6:** Evaluation of retrieval, answer accuracy, citations and unanswerable questions
- [ ] **Phase 7:** Tests, Docker, logging and a full demo

![Douala at dusk](images/closing.jpg)

*Our stories. Our world.*

<sub>Image credits: Pexel & Unsplash</sub>
