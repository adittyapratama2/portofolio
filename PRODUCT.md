# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router), chosen by the user. Bilingual Indonesian and English. Self-hosted on a server run by the user's sibling; domain not yet purchased. SEO is a first-class goal, with automated content planned for later (mechanism undecided).

## Users

Four audiences, all confirmed by the user, with no single primary one picked:
- Overseas remote recruiters and hiring managers, judging whether to interview.
- Freelance clients and Indonesian small businesses, judging whether this person can get a system running.
- Fellow developers and the community, reading for architecture and technical writing.
- Academia (S2 supervisors, lecturers, research collaborators), reading about the thesis and Dolanan.

The visitor is evaluating one named person. Language of first contact differs by audience, so both `id` and `en` must be complete, not a stub translation.

## Product Purpose

A personal portfolio for Adittya Pratama, a developer with 7+ years of experience. It shows what he has built and how he thinks, and gives visitors one way to reach him. Success means a qualified visitor contacts him, and organic search brings in people who did not already know his name.

## Positioning

End-to-end systems for real institutions. One person has carried a system from schema to admissions and academic workflows to server hardening, running in production for 5,000+ users. Another developer cannot copy that by listing the same stack.

## Operating Context

- Work history: UPT TIK, Universitas Perjuangan Tasikmalaya (Apr 2023 to present), and PT Padud Jaya Putera (Aug 2019 to Apr 2023). Earlier education: S.Kom., Universitas Perjuangan Tasikmalaya, 2015 to 2019. Current: M.Kom. in progress at Universitas AMIKOM Yogyakarta, thesis on applied RAG.
- Most production work belongs to a university or a former employer. It can be told as a case study, never with code, data, or sensitive internal names.
- Content will later be generated automatically for SEO, so page structure must accept new articles without redesign.

## Capabilities and Constraints

- Case studies chosen for display: SIMANTAP and PMB (student information system and admissions), Dolanan (event-driven educational gaming platform), and the double-entry accounting engine from the factory ERP, and the applied RAG thesis.
- Excluded from the portfolio: `cleanyourtv` (repo belongs to another author), game projects, affiliate and personal finance work.
- Contact only through email and LinkedIn (GitHub also listed in the resume). The phone number in the resume must not appear on the site.
- Undecided: primary audience, final domain, whether to show a profile photo, how automated content is produced and reviewed, hosting details on the sibling's server.

## Brand Commitments

- The brand is the person's real name, Adittya Pratama, not a studio name.
- Voice: confident and plain. Claims come from the resume, nothing more.

## Evidence on Hand

- Resume with dates, roles, and results: `~/workspace/personal/resume/Adittya_Pratama_Resume.md` (also `.html`, `.pdf`).
- Concrete claims available: 5,000+ active users on SIMANTAP and PMB; first enterprise double-entry accounting engine at the factory; Dolanan monorepo with ADRs; RAG pipeline evaluated with Precision@K, MRR, and context relevance.
- Absent and must not be invented: testimonials, client names, traffic numbers, revenue, awards, screenshots of internal systems, a profile photo (status unknown).

## Product Principles

- Proof before adjectives: every claim traces to the resume or a published artifact.
- Case studies explain the problem and the decision, not only the stack list.
- Both languages are first-class pages with their own URLs and metadata.
- Contact is simple and has a single route.
- Content must be findable by search engines without client-side rendering tricks.

## Accessibility & Inclusion

No product-specific requirement stated. Both languages need correct `lang` and `hreflang` handling.
