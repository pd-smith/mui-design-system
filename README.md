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
-   Avoid building custom components for as long as possible!
-   Re-export all components from the design library! That way if you need to wrap the component in the future, your consumers don't need to update their imports.
