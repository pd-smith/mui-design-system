# MUI Design system

Quick start turbo repo setup for design systems extending material UI

## Goals of this setup

-   provide a reasonable starting point for design systems that want to use MUI as a base
-   lay patterns that are provide an easy upgrade path with MUI
-   provide comments and links to tools to help aid developers

## General guidlines

-   Use the MUI API! It's there, trusted, and backed by a large community. It is preferred that our teammates reference and install their components in the same manor that is described by the MUI documentation.
-   If you're updating the component anywhere outside of the style, you're going to make your life difficult
-   Follow the conventions of the library (themed palettes, typography, etc) for as long as possible
-   If you want to build custom components, keep them separate from your core MUI libary. This setup uses turborepo, which is great at managing multiple packages (and their dependencies) in the same repo.
