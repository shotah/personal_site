# Personal Site

This repository contains the source code for my personal website. It's built with modern web technologies, emphasizing maintainability, scalability, and ease of deployment.  This project leverages environment variables, a `Makefile` for common tasks, and automated workflows for a streamlined development and deployment experience.

## Key Features

* **Modern Full-Stack Development:** Built with a focus on performance, responsiveness, and a clean, maintainable codebase.
* **Dockerized Deployment:**  Designed for easy deployment using Docker and Docker Compose, ensuring consistency across environments.
* **Environment Variable Configuration:** All sensitive and configurable settings are managed through `.env` files, keeping your code clean and secure.
* **Makefile for Common Tasks:**  A `Makefile` is provided to simplify common development and deployment tasks.

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

* Node.js (v16 or later)
* Docker
* Docker Compose
* Git
* Make

### Installation and Setup

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/shotah/personal_site.git 
    cd personal_site
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Configure Environment Variables:**

    * Create a `.env` file in the root directory of the project.
    * Populate the `.env` file with the necessary environment variables.  **Do not commit this file to version control.**
    * A `.env.example` file is provided as a template. Copy it to `.env` and fill in your values.

    ```bash
    cp .env.example .env
    ```

    **Example `.env` contents:**

    ```t
    # Email settings
    EMAIL_SERVER_USER=your_email@example.com
    EMAIL_SERVER_PASSWORD=your_app_password

    # Let's Encrypt settings
    LETSENCRYPT_HOSTNAME=your_domain.com
    LETSENCRYPT_EMAIL=your_email@example.com

    # Docker settings
    DOCKER_CONTAINER_NAME=your_container_name
    DOCKER_REPO=your_docker_repo
    DOCKER_TAG=latest

    # Deployment settings
    REMOTE_USER=your_remote_user
    REMOTE_SERVER=your_server_ip
    REMOTE_PATH=/path/to/deployment/directory
    ```

    **Important:** Replace the placeholder values in `.env` with your actual credentials and settings.

4. **Using the Makefile**
    The `Makefile` contains common tasks to help with development.
    * `make build` - Builds the project
    * `make start` - Starts the project locally
    * `make stop` - Stops the project locally
    * `make deploy` - Deploys the project to the remote server.
    * `make clean` - Removes build artifacts.

    ```bash
    make build
    make start
    ```

### GitHub Actions Workflow

The `.github/workflows` directory contains the configuration for the automated CI/CD pipeline. To ensure the workflow functions correctly, you must configure the following secrets in your GitHub repository settings:

* **`DOCKER_USERNAME`:** Your Docker Hub or other container registry username.
* **`DOCKER_PASSWORD`:** Your Docker Hub or other container registry password or personal access token.
* **`DOCKER_CONTAINER_NAME`:** The name of the docker container. This should match the `DOCKER_CONTAINER_NAME` in your `.env` file.

These secrets are used to authenticate with your container registry and push the built Docker image.

---

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.

## License

[MIT License]

---

## Additional Notes

* **Security:** Never commit your `.env` file to version control. It contains sensitive information.
* **Docker Image Naming:** Be sure to include the image name in the `DOCKER_REPO` variable. For example: `your-docker-username/personal-site-image`
* **Remote Deployment:** The `make deploy` command assumes you have SSH access configured to your remote server.
* **Testing:** While not explicitly mentioned, consider adding a section about testing if you have automated tests.
* **Documentation:** If you have any other documentation, like an API spec, or a design doc, you should link to it here.
