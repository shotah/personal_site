# Personal Site

This is the source code for my personal website, built with modern web technologies. It includes features like a responsive design, dynamic theming, and deployment via Docker.

## Features

- **Full-Stack Development**: Built with a focus on scalability and performance.
- **Dynamic Theming**: Supports light and dark modes.
- **Dockerized Deployment**: Easily deployable using Docker and Docker Compose.
- **Continuous Integration**: Automated builds and pushes using GitHub Actions.

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

---

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shotah/personal_site.git
   cd personal_site
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create .env file in the root directory and add the following environment variables:

    ```
    # Email settings

    EMAIL_SERVER_USER=<your_email@example.com>
    EMAIL_SERVER_PASSWORD="your_app_password"

    # Let's Encrypt settings

    LETSENCRYPT_HOSTNAME=your_domain.com
    LETSENCRYPT_EMAIL=<your_email@example.com>

    # Docker settings

    DOCKER_CONTAINER_NAME=your_container_name
    DOCKER_REPO=your_docker_repo
    DOCKER_TAG=latest

    # Deployment settings

    REMOTE_USER=your_remote_user
    REMOTE_SERVER=your_server_ip
    REMOTE_PATH=/path/to/deployment/directory
    ```
