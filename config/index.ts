import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Ayush Singh | Cloud & DevOps Engineer",
  description: "Portfolio of Ayush Singh — Cloud & DevOps Engineer building scalable infrastructure on AWS with Docker, Kubernetes, Terraform, and CI/CD pipelines.",
  keywords: [
    "ayush singh",
    "cloud engineer",
    "devops",
    "aws",
    "docker",
    "kubernetes",
    "terraform",
    "portfolio",
    "reactjs",
    "nextjs",
    "typescript",
    "space-portfolio",
    "ci/cd",
    "cloud infrastructure",
  ] as Array<string>,
  authors: {
    name: "Ayush Singh",
    url: "https://github.com/thakurayushsingh",
  },
} as const;
