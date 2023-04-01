ARG PYTHON_VERSION="3.9"
FROM mcr.microsoft.com/vscode/devcontainers/python:0-${PYTHON_VERSION}

WORKDIR /workspace

ARG NODE_VERSION="16"
RUN if [ "${NODE_VERSION}" != "none" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

USER vscode
SHELL ["/bin/bash", "-o", "pipefail", "-c"]
RUN curl -sSL https://install.python-poetry.org | python3 - --version=1.3.2
ENV PATH "/home/vscode/.poetry/bin:$PATH"
