# Yoga Website

## Requirements & Assumptions 🟠

### Clarifying Questions

*Questions that need to be answered to better understand the requirements and constraints of the system*

- **Channels** Email ? SMS ? Push Notifications ?
- **User Authentication** Email/Password ? Social Login ?
- **Email Templates** Predefined ? Customizable ?
- **Email Scheduling** Immediate ? Scheduled ? Recurring ?
- **Email Personalization** Dynamic content based on user data ?
- **Email Tracking** Open rates ? Click-through rates ? Bounce rates ?
- **Spam protection** How to prevent the system from being used for spamming ? Rate limiting ? Email verification ? Prevent a same lead from receiving multiple emails in a short period of time ?
- **Sequences** How are the sequences managed for sending emails?

### Functional Requirements 🟢

*Describes the specific features and functionalities that the system must provide*

- **Mainsite** Main website for the yoga business, including information about classes, instructors, schedules, and pricing.

## Capacity Planning ⏰

### Database

*Estimates the expected load on the system, such as the number of users, transactions, or requests per second. This helps in designing a system that can handle the anticipated traffic and scale as needed*

Estimation for one user campaign:

### Storage

*Estimates the storage requirements for the system, such as the amount of data that needs to be stored and the growth rate over time. This helps in designing a system that can handle the anticipated storage needs and scale as required.*

## High Level Architecture 🏗️

*Describes the overall structure of the system, including the main components and how they interact with each other. This can be illustrated using diagrams such as component diagrams or architecture diagrams.*

```mermaid
flowchart

A[Nuxt] --> B(Redis)
```

## System Workflow 🔄

*Explains the sequence of interactions between different components of the system, such as how a user request flows through the application, how data is processed, and how responses are generated. This can be illustrated using sequence diagrams or flowcharts.*

```mermaid
sequenceDiagram
    autonumber

    box Frontend
    actor U as Alice
	participant N@{type: "entity"} as Nuxt
    end

    box backend
    participant R@{type: "database"} as Redis
    participant F@{type: "database"} as Firebase
    participant A@{type: "entity"} as N8N
    end

    box storage
    participant S@{type: "entity"} as Amazon S3
    end

    par Visits
    U ->> N: Visit website
    N <<->> R: Cache data in Redis
    N <<->> S: Fetch static files from S3
    end

    U ->> N: Ask questions
    N ->> A: Check Ai agent
    A -->> N: Return answer
    N ->> U: Answer
  
    U ->> N: Contact
    N -->> F: Store data in Firebase
```

* Emailing service architecture: [services/goemailer/ARCHITECTURE.md](services/goemailer/ARCHITECTURE.md)

## Api Design 🛠️

*Describes the design of the APIs that will be used for communication between different components of the system, such as the frontend and backend. This includes the endpoints, request and response formats, authentication mechanisms, and any other relevant details about how the APIs will function.*

> Determines also whether the system will be using RESTful APIs or GraphQL, and how the frontend will interact with these APIs to fetch and manipulate data.
> If the system uses microservices architecture, the API design will also include details about how different microservices will communicate with each other, such as using RESTful APIs, gRPC, or message queues.

| Endpoint | Method | Description | Request Body | Response Body |
| -------- | ------ | ----------- | ------------ | ------------- |

## Data storage

*Describes how the system will store and manage data, including the choice of database (e.g., relational, NoSQL), data models, and how data will be accessed and manipulated by the application.*

### Amazon S3

*Explains the the manner in which the system will use Amazon S3 for storing and retrieving files, including the structure of the S3 buckets, access control policies, and how the application will interact with S3 for file uploads and downloads.*

### Database

*Explains the choice of database (e.g., relational, NoSQL) and how it will be used to store and manage data for the application. This includes the data models, relationships between entities, and how the application will perform CRUD (Create, Read, Update, Delete) operations on the database.*

```mermaid
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ ORDER_ITEM : contains
    PRODUCT ||--o{ ORDER_ITEM : includes
    CUSTOMER {
        string id
        string name
        string email
    }
    ORDER {
        string id
        date orderDate
        string status
    }
    PRODUCT {
        string id
        string name
        float price
    }
    ORDER_ITEM {
        int quantity
        float price
    }
```

## Caching

*Describes the caching strategy for the application, including what data will be cached, how it will be cached (e.g., in-memory cache, distributed cache), and how the cache will be invalidated when data changes. For example, product data that is frequently accessed but infrequently updated can be cached to improve performance and reduce load on the database.*

Caching will be almost exlusively done with Redis as an in-memory data store.

## Scalability

*Describes how the system will be designed to handle increasing loads and scale as needed. This includes strategies for horizontal scaling (adding more servers) and vertical scaling (upgrading existing servers), as well as any load balancing techniques that will be used to distribute traffic across multiple servers.*

```mermaid
    flowchart LR
        A[User Requests] --> B(Load Balancer)
        B --> C[EmailApi]
        B --> D[EmailApi]
        B --> E[EmailApi]
        E --> G[Emiling Server]
        E --> H[Emiling Server]
        E --> I[Emiling Server]
```

---

## References ⏰

*List of services and components that will be part of the system, along with their respective technologies and descriptions. This can be presented in a tabular format for clarity.*

| Service  | Language/Framework | Description                        |
| -------- | ------------------ | ---------------------------------- |
| Frontend | Nuxt 4             | Renders the desktop user interface |

## Technologies Used 🌳

*List of the main technologies used in the system, along with their purpose and version. This can help in understanding the technical stack of the application and how different components are implemented.*

| Technology        | Purpose/Usage            | Version |
| ----------------- | ------------------------ | ------- |
| Docker            | Containerization         | ✅ 20.X |
| Nuxt 4            | Frontend framework       | ✅ 4.X  |
| Firebase          | Authentication, database | ✅ -    |
| AWS S3            | Static and media storage | ✅ -    |
| Cloudfront        | CDN for static files     | ✅ -    |
| Google Analytics  | Traffic analysis         | ✅ -    |
| Facebook Pixels   | Traffic analysis         | ✅ -    |
| Microsoft Clarity | Traffic analysis         | ✅ -    |
