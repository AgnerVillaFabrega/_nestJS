# 🚀 NestJS Course Repository

<p align="center">
  <a href="https://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="NestJS Logo" />
  </a>
</p>

Welcome to the **NestJS Course Repository**! 🌟  
This repository is a hands-on journey through the powerful features and best practices of **NestJS**, a progressive Node.js framework.  

---

🎯 **Course Highlights**  
Master the art of building scalable, maintainable, and robust backend applications while exploring key concepts like:  
- Modular architecture.  
- Dependency injection.  
- Database integration.  
- Authentication & Authorization.  
- API documentation.  
- WebSockets and much more!  

---

💡 Let’s dive into the sections below and start building amazing applications! 🚀

## Sections Overview

### Section 01: Introduction to the Course
- How the course works.
- Recommended installations.
- Additional materials.

### Section 02: TypeScript Basics
The goal of this section is to familiarize with common concepts used in NestJS daily. Topics covered:
- Basic types.
- Interfaces.
- Implementations.
- Classes.
- Adapter pattern.
- Liskov substitution principle.
- Dependency injection.
- Getters.
- Asynchronous methods.
- Class and method decorators.

> **Note:** This is not a full TypeScript introduction; it focuses on concepts needed for the course.

### Section 03: Introduction to Nest
First steps with NestJS:
- What is NestJS?
- Why use it?
- Explanation of each file in a new Nest project.
- Core Nest building blocks:
  - Modules.
  - Controllers (Post, Patch, Get, Delete).
  - Initial decorators.
  - Services.
  - Dependency injection.
  - Pipes.
  - Exception filters.

A basic REST API will be created to explain each concept step by step.

### Section 04: CRUD Operations
Continuing with the POST, PATCH, and DELETE endpoints for the initial CRUD. Key topics:
- DTO (Data Transfer Object).
- Automatic validations.
- `class-validator`.
- `class-transformer`.
- DRY principle (Don’t Repeat Yourself).
- Useful decorators from `class-validator`.

### Section 05: Module Communication
A reinforcement of previously learned concepts with added inter-module communication. Key topics:
- **SEED Endpoint**: Populate data for Cars and Brands.
- Linking the seed module to other modules.
- Common errors with linked modules.
- Dependency injection issues with external modules.
- Complete Brands CRUD:
  - Endpoints.
  - DTOs.
  - Services.
  - Controllers.

### Section 06: Production Build
- Generate a basic production build.

### Section 07: Database Integration
Focus on database operations:
- Validations.
- CRUD with a database.
- Docker and Docker Compose.
- Connecting containers with the filesystem.
- Schemas and models.
- DTOs and extensions.
- Backups to GitHub.

### Section 08: Advanced Database Operations
Topics include:
- Using models across modules.
- SEED for database population.
- Pagination.
- DTOs for query parameters.
- Batch insertions.

### Section 09: Environment Configuration
Working with environment variables and validation:
- Dockerization.
- MongoDB Atlas.
- `.env` file.
- `joi` for validation schemas.
- Configuration module.
- Deployment steps:
  - Dockerfile.
  - Recommendations for useful README content.

### Section 10: TypeORM and Postgres
Key topics:
- TypeORM.
- Postgres.
- CRUD operations.
- Constraints and validations.
- Search and pagination.
- DTOs and entities.
- TypeORM decorators.
- `BeforeInsert` and `BeforeUpdate` methods.

This section builds the foundation for relationships, authentication, authorization, and WebSockets.

### Section 11: Relational Databases
Focus on relational databases:
- One-to-many and many-to-one relationships.
- Query Runner and Query Builder.
- Transactions (commits and rollbacks).
- Table renaming.
- SEED creation.
- Flattening results.

### Section 12: File Uploads
Handling file uploads to the backend:
- Validations.
- File upload control.
- Recommendations for external hosting services.

### Section 13: Authentication and Authorization
This is a large section with essential concepts:
- Authentication and authorization.
- JSON Web Tokens.
- Password hashing.
- `Nest Passport`.
- Asynchronous modules.
- Route protection.
- Custom decorators (methods, classes, properties).
- Linking users to products.
- Bearer tokens.

> **Recommendation:** Study this section in smaller chunks to avoid being overwhelmed.

### Section 14: Documentation
Working with semi-automatic documentation:
- Postman documentation.
- Nest Swagger.

### Section 15: WebSockets
Client-server communication via WebSockets:
- Nest Gateways.
- Connections and disconnections.
- Emitting and listening for messages.
- Authentication with JWTs.
- Preventing double connections for authenticated users.

### Section 16: Deployment
Deploying the backend and frontend:
- Heroku CLI.
- Logs and error handling in production.
- Environment variables setup.
- Postgres in the cloud.
- Netlify deployment.
- Application testing.
- CORS.
- VITE production build.

---
