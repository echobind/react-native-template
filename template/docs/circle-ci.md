# CircleCI

These instructions assume you have followed the installation instructions our [`hygen-templates-echobind` repository](https://github.com/echobind/hygen-echobind-templates).

## Setup CircleCI to build

After generating a new project, add a GitHub remote and push up the changes. Login to CircleCI and head to the settings for your organization.

1.  Ensure you've added a `MacOS` Plan. This is required to build iOS projects.

    ![Add MacOS plan](https://monosnap.com/image/BALZPhSmjwHMsmpa26CVS9DP1dFGbj.png)

2.  Enable "untrusted or 3rd party orbs" under the organizations security settings. This step is required to use the provided CircleCI Orb configuration for react-native.
    Learn more about CircleCI Orbs [here](https://circleci.com/docs/2.0/using-orbs/). The source for the react-native orb is [here](https://github.com/echobind/circleci-react-native-orb).

    ![Orb Security Settings](https://monosnap.com/image/LSrtBdwDFJRh5HLaHbroKJx6cgqagC.png)

3.  Tell Circle CI to build this project (must be logged in with an account that has owner permissions on GitHub).

    ![Add Project Image](https://monosnap.com/image/JWQQ5tlsOEBrKjpFnYDRdQOx9VCiVb.png)

4.  Thats it! Your project should be building. Here's what the workflow looks like:

    ![Circle Workflow](https://monosnap.com/image/eT1Akkua4ZjsA72Ng4imma2qyFovLx.png)

    Once node tests (via jest) complete, iOS and Android builds run in parallel. See `.circleci/config.yml` for workflow details, including the Fastlane lanes that are run on each branch by default.
