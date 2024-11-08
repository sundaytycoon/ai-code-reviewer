# AI-CODE-REVIEWER

This GitHub Action utilizes LLM AI to automate Pull Request (PR) code reviews. The service is designed to integrate with
GitHub workflows, providing intelligent feedback and suggestions on PRs to enhance code quality and efficiency. Here’s a
brief overview of how it works:

1. PR Event Detection: The action is triggered when a PR is opened or updated.
2. Code Checkout and Git Diff Extraction: The action checks out the code and extracts the git diff to identify changes.
3. LLM Server Request: The action sends the git diff to an LLM server for code review.
4. Review Feedback: The LLM server’s response is used to generate review comments, which are then added to the PR.

---

Key features include:

- AI-Powered Code Review: Utilizes LLM AI to review code changes.
- Intelligent Feedback: Provides actionable suggestions for code improvement.
- Flexible Integration: Easy to set up and integrate into GitHub workflows.

For more detailed setup and configuration instructions, please refer to the full documentation once the specifications
are finalized.
