# LTT-dev

_LTT-dev_ is a repository in which you'll find an entire development environment for you to test and develop new features for LamboLead Tech.

This README file should help you set up the environment and provide a guide to start developing new features.

> _Disclaimer: We assume that you have already installed Node & NPM, Git, MySQL Server +8.0.3, MySQL Workbench 8.0.29 and MySQL Shell 8.0. If not, contact the [project leader](https://github.com/LamboLead)._
> Do you have any questions? Ask the [project leader](https://github.com/LamboLead).

To work in this project you need to follow these steps:

### **If you haven't cloned the repository yet** 

1. In [GitHub](https://github.com/LamboLead/LLT-dev), go to the branch you want to work in
2. Copy the url inside the big green button named **_Code_** on _HTTPS_ option.
3. Create a new directory in your filesystem and open a new Git Bash there.
4. Clone the project in the bash like so:

```bash
$ git clone <copied_url>
```

### **If you already have this repository in your machine**

1. Pull the changes into your machine:
```bash
   $ git pull <connection_name> all
```

2. _(Optional)_ If the branch that you want to work on doesn't appear in your local repository, run the following:
```bash
   $ git branch -**a** # Checks for remote and local branches in the repository
   $ git checkout <connection_name>/<branch-to-download> # Checks out to the remote branch of interest. Now, HEAD is in a detached state
   $ git checkout -b <downloaded branch> # Creates and checks out to the corresponding branch in your local repository
```

### **After previous steps, keep going with these ones:**

> _You should be in the correct branch to proceed. Check which branch has the most progress and make sure that you are inside of it_

3. _(Optional)_ If you haven't set up the test database in your machine, contact the [project leader](https://github.com/LamboLead) so that he can help you with this task

4. Go to the path that the repository is into, open a new command line in that path and install all the dependencies:
****```sh
   npm install
```

5. Run all needed services

```sh
   npm run dev # Starts the development server in your machine
   npm run server # Starts a local server for your database and routes
   npm run styleguide # (Optional) Starts a server for the documentation pages
``` 

5. If everything is OK, start coding. ***We need your help!***
