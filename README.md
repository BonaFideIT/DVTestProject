# Test Project for Django Vite

[Django Vite](https://github.com/MrBin99/django-vite)

## Installation

1. [install uv](https://docs.astral.sh/uv/getting-started/installation/).
2. install the backend dependencies:
    ```shell
    uv sync
    ```
3. install the frontend dependencies:
    ```shell
    source .venv/bin/activate
    cd frontend
    uv run nodeenv -n 23.10.0 env
    source env/bin/activate
    npm install
    deactivate_node
    cd ..
    deactivate
    ```
4. run vite dev server:
    ```shell
    cd frontend
    source env/bin/activate
    npm run dev
    ```
5. run django server:
    ```shell
    source .venv/bin/activate
    uv run ./dvtestproject/manage.py migrate
    uv run ./dvtestproject/manage.py runserver
    ```

## Notes

The Svelte Vite template is based on the files created by using the following command:

```shell
cd frontend
source env/bin/activate
npm create vite@latest . -- --template svelte-ts
```
