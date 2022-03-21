# Implementing OAuth2.0 using AWS SAM and React.js

The goal of this repository is to showcase how to setup Oauth2.0 using AWS SAM and React.js.

## Prerequisite

- AWS CLI - [Install and configure AWS CLI CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html)
- SAM CLI - [Install the SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
- Node.js - [Install Node.js](https://nodejs.org/en/), including the NPM package management tool.

## Deploy

To build and deploy your application, run the following in your shell:

```
sam build
sam deploy
```

If it's your first time deploying the project, make sure to include the `--guided` attribute

```
sam deploy --guided
```

## Cleanup

To remove all the resources associated with your stack, you can run the following:

```bash
aws cloudformation delete-stack --stack-name MY_STACK_NAME
```
