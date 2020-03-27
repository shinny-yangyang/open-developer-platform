(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(1),i=n(10),o=(n(0),n(175)),r=n(177),l={id:"continuous-delivery",title:"Continuous Delivery"},s={id:"development-infrastructure/continuous-delivery",title:"Continuous Delivery",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/../docs/development-infrastructure/continuous-delivery.mdx",permalink:"/open-developer-platform/docs/development-infrastructure/continuous-delivery",editUrl:"https://github.com/finos/open-developer-platform/edit/master/website/../docs/development-infrastructure/continuous-delivery.mdx",sidebar:"mainSidebar",previous:{title:"Project Documentation",permalink:"/open-developer-platform/docs/development-infrastructure/project-documentation"},next:{title:"The ODP Project Team",permalink:"/open-developer-platform/docs/team"}},c=[{value:"Travis CI to OpenShift integration",id:"travis-ci-to-openshift-integration",children:[]},{value:"Configuration",id:"configuration",children:[{value:"Project setup",id:"project-setup",children:[]}]},{value:"Template definition",id:"template-definition",children:[{value:"Template name and parameters",id:"template-name-and-parameters",children:[]},{value:"Images and streams",id:"images-and-streams",children:[]},{value:"Deployment configuration",id:"deployment-configuration",children:[]},{value:"Service definition",id:"service-definition",children:[]}]},{value:"Openshift Console",id:"openshift-console",children:[]},{value:"How to get access",id:"how-to-get-access",children:[]},{value:"Useful commands",id:"useful-commands",children:[]}],p={rightToc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Continuous Delivery (CD - read the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://martinfowler.com/bliki/ContinuousDelivery.html"}),"definition given by Martin Fowler"),") allows project leads and committers to configure automated processes to build and deploy their software. FINOS provides a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#openshift-console"}),"dedicated OpenShift Online instance")," that can be used for this purpose."),Object(o.b)("h2",{id:"travis-ci-to-openshift-integration"},"Travis CI to OpenShift integration"),Object(o.b)("p",null,"Travis CI ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.travis-ci.com/user/customizing-the-build/"}),"configuration")," can be extended trigger the OpenShift image build and deployment; to make configuration easier, the Foundation provides a script called ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/symphonyoss/contrib-toolbox/blob/master/scripts/oc-deploy.sh"}),Object(o.b)("inlineCode",{parentName:"a"},"oc-deploy.sh"))," that can be executed as ",Object(o.b)("inlineCode",{parentName:"p"},"after_success")," script and triggers a containerised deployment, using the OpenShift CLI tool; with a simple bash line, the following operations are performed:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Install OpenShift CLI (oc) in the current environment (see ",Object(o.b)("inlineCode",{parentName:"li"},"OC_VERSION")," and ",Object(o.b)("inlineCode",{parentName:"li"},"OC_RELEASE"),")"),Object(o.b)("li",{parentName:"ol"},"Logs into OpenShift Online (see ",Object(o.b)("inlineCode",{parentName:"li"},"OC_ENDPOINT"),") and select the right OpenShift project (see ",Object(o.b)("inlineCode",{parentName:"li"},"OC_PROJECT"),")"),Object(o.b)("li",{parentName:"ol"},"Deletes - if ",Object(o.b)("inlineCode",{parentName:"li"},"OC_DELETE_LABEL")," is defined - all OpenShift resources marked with the specified ",Object(o.b)("inlineCode",{parentName:"li"},"key=value")," label"),Object(o.b)("li",{parentName:"ol"},"Processes - if ",Object(o.b)("inlineCode",{parentName:"li"},"OC_TEMPLATE")," file exists and is valid - and creates all OpenShift resources defined within; template parameter values can be passed using the ",Object(o.b)("inlineCode",{parentName:"li"},"OC_TEMPLATE_PROCESS_ARGS")," configuration variable"),Object(o.b)("li",{parentName:"ol"},"Triggers the build of an OpenShift image, identified by the ",Object(o.b)("inlineCode",{parentName:"li"},"BOT_NAME")," configuration variable, uploading the application binary as ZIP archive (see ",Object(o.b)("inlineCode",{parentName:"li"},"OC_BINARY_ARCHIVE"),") or a folder (see ",Object(o.b)("inlineCode",{parentName:"li"},"OC_BINARY_FOLDER"),") that have been generated by the project build; the folder is preferred over the archive binary distribution, as it's less likely to cause network timeouts during the upload")),Object(o.b)("p",null,"Below is the Travis configuration."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"...\n \nafter_success: curl -s https://raw.githubusercontent.com/symphonyoss/contrib-toolbox/master/scripts/oc-deploy.sh | bash\n")),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"The oc-deploy.sh script requires some mandatory environment variables to be defined before executing the script; the mandatory ones are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"OC_TOKEN")," - The Openshift Online token"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"BOT_NAME")," - the name of the BuildConfig registered in OpenShift, which is used to start the OpenShift build"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"OC_TEMPLATE")," - Path of an OpenShift template to (oc) process and create, if existent; defaults to .openshift-template.yaml"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"OC_BINARY_ARCHIVE")," or ",Object(o.b)("inlineCode",{parentName:"li"},"OC_BINARY_FOLDER")," - Relative path to the ZIP file (or folder) to upload to the container as source"),Object(o.b)("li",{parentName:"ul"},"Any other environment variable containing template parameters, see ",Object(o.b)("inlineCode",{parentName:"li"},"OC_TEMPLATE_PROCESS_ARGS")," below")),Object(o.b)("p",null,"Please review the default values of the following variables:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"OC_DELETE_LABEL")," - Used to delete a group of resources with the same label; If set, the script will invoke oc delete all -l <OC_DELETE_LABEL>; example: ",Object(o.b)("inlineCode",{parentName:"li"},'OC_DELETE_LABEL="app=mybot"')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"OC_TEMPLATE_PROCESS_ARGS")," - Comma-separated list of environment variables to pass to the OC template; defaults to null; example ",Object(o.b)("inlineCode",{parentName:"li"},'OC_TEMPLATE_PROCESS_ARGS="BOT_NAME,S2I_IMAGE"')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"OC_VERSION")," - OpenShift CLI version; defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"1.5.1")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"OC_RELEASE")," - OpenShift CLI release; defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"7b451fc-linux-64bit")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"OC_ENDPOINT")," - OpenShift server endpoint; defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"https://api.starter-us-east-1.openshift.com")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"OC_PROJECT_NAME")," - The Openshift Online project to use; default is ",Object(o.b)("inlineCode",{parentName:"li"},"ssf-dev"),", no changes needed"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"OC_ENDPOINT")," - OpenShift server endpoint; defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"https://api.pro-us-east-1.openshift.com")," , no changes needed"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SKIP_OC_INSTALL")," - Skips the OpenShift CLI (oc) installation; defaults to false; useful for local ",Object(o.b)("inlineCode",{parentName:"li"},"oc-deploy.sh")," test runs")),Object(o.b)("p",null,"The example below shows a complete ",Object(o.b)("inlineCode",{parentName:"p"},".travis.yml")," configuration."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'env:\n  global:\n   - BOT_NAME="mybot"\n   - OC_DELETE_LABEL="app=mybot"\n   - SYMPHONY_POD_HOST="foundation-dev.symphony.com"\n   - SYMPHONY_API_HOST="foundation-dev-api.symphony.com"\n   - OC_BINARY_FOLDER="vote-bot-service/target/oc"\n   - OC_TEMPLATE_PROCESS_ARGS="BOT_NAME,SYMPHONY_POD_HOST,SYMPHONY_API_HOST"\n \nafter_success: curl -s https://raw.githubusercontent.com/symphonyoss/contrib-toolbox/master/scripts/oc-deploy.sh | bash\n')),Object(o.b)("h3",{id:"project-setup"},"Project setup"),Object(o.b)("p",null,"In order to configure Continuous Delivery, the project must meet few requirements and some configuration must be defined."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Get familiar with ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://finosfoundation.atlassian.net/wiki/spaces/FDX/pages/75727050/Continuous+Delivery#ContinuousDelivery-glossary"}),"OpenShift concepts"),"; keep in mind that most of them are inherited by Kubernetes, which is the orchestration engine used by OpenShift."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Memory (size) and CPU (number) requirements must be known")," upfront"),Object(o.b)("li",{parentName:"ol"},"The ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/3.3/dev_guide/deployments/deployment_strategies.html"}),Object(o.b)("strong",{parentName:"a"},"deployment strategy"))," ",Object(o.b)("strong",{parentName:"li"},"must be known")," upfront; default is RollingDeployment, which spins up a new container in parallel to the existing one, switches traffic when the new one is ready and finally kills the existing one."),Object(o.b)("li",{parentName:"ol"},"Collect all passwords and secrets that are needed by the applications to run; the Foundation Staff will register these entries as secrets in OpenShift and deliver secret key references"),Object(o.b)("li",{parentName:"ol"},"The build process MUST generate a folder that:\na. ",Object(o.b)("strong",{parentName:"li"},"MUST contain all the artifacts")," to run the application; for Maven builds, the assembly plugin can be used\nb. ",Object(o.b)("strong",{parentName:"li"},"MUST contain a (Unix) run script"),"; for Maven builds, the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"http://www.mojohaus.org/appassembler/appassembler-maven-plugin/"}),"appassember plugin")," can generate it\nc. ",Object(o.b)("strong",{parentName:"li"},"MUST NOT contain any password"),", secret or sensitive data (like emails, names, addresses, etc) in clear text; ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/latest/dev_guide/secrets.html#dev-guide-secrets-using-secrets"}),"OpenShift secrets")," provide a safe way to manage them"),Object(o.b)("li",{parentName:"ol"},"Follow the instructions below to define an ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.org/latest/architecture/core_concepts/templates.html"}),"OpenShift template")," called ",Object(o.b)("inlineCode",{parentName:"li"},".openshift-template.yaml"),", in the root folder of the GitHub repository")),Object(o.b)("h2",{id:"template-definition"},"Template definition"),Object(o.b)("p",null,"Below is described, section by section, an OpenShift template that defines"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The Docker image build process for the given app"),Object(o.b)("li",{parentName:"ol"},"The image stream that triggers a deployment configuration when an image is created"),Object(o.b)("li",{parentName:"ol"},"The deployment configuration that defines - among other things - the containers to run and its configuration")),Object(o.b)("p",null,"You will notice that all resources configured below define an app label with the same value, which allows to run commandline commands across all resources with the same label, for example ",Object(o.b)("inlineCode",{parentName:"p"},"oc delete all -l app=mybot")),Object(o.b)("h3",{id:"template-name-and-parameters"},"Template name and parameters"),Object(o.b)("p",null,"This is the header of the file, which defines the template name mybot-template and a list of parameters, like BOT_NAME; parameters must be exported as environment variables before invoking ",Object(o.b)("inlineCode",{parentName:"p"},"oc-deploy.sh")," (see above); from the objects: line below, the Openshift configuration resources are defined."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'apiVersion: v1\nkind: Template\nmetadata:\n  name: mybot-template\nparameters:\n- name: BOT_NAME\n  description: The Bot name\n  displayName: Bot Name\n  required: true\n  value: "mybot"\n- name: SEND_EMAIL\n  description: Whether the bot should send emails or not; defaults to true\n  displayName: Send Email?\n  required: true\n  value: "true"\n...\nobjects:\n')),Object(o.b)("h3",{id:"images-and-streams"},"Images and streams"),Object(o.b)("p",null,"The OpenShift image creation process is carried by a container called deployer and decribed by the BuildConfig resource, which takes as parameters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"a ",Object(o.b)("inlineCode",{parentName:"li"},"sourceStrategy"),", which identifies the container image used to build the deployer container and points to the ",Object(o.b)("inlineCode",{parentName:"li"},"ImageStream")," with name ",Object(o.b)("inlineCode",{parentName:"li"},"s2i-java")),Object(o.b)("li",{parentName:"ul"},"the output image name and tag, which points to the ",Object(o.b)("inlineCode",{parentName:"li"},"ImageStream")," with name ",Object(o.b)("inlineCode",{parentName:"li"},"${BOT_NAME}"))),Object(o.b)("p",null,"See the example below."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'- apiVersion: v1\n  kind: ImageStream\n  metadata:\n    labels:\n      app: ${BOT_NAME}\n    name: s2i-java\n  spec:\n    dockerImageRepository: "docker.io/jorgemoralespou/s2i-java"\n- apiVersion: v1\n  kind: ImageStream\n  metadata:\n    labels:\n      app: ${BOT_NAME}\n    name: ${BOT_NAME}\n  spec: {}\n  status:\n    dockerImageRepository: ""\n- apiVersion: v1\n  kind: BuildConfig\n  metadata:\n    name: ${BOT_NAME}\n    labels:\n      app: ${BOT_NAME}\n  spec:\n    output:\n      to:\n        kind: ImageStreamTag\n        name: ${BOT_NAME}:latest\n    postCommit: {}\n    resources: {}\n    runPolicy: Serial\n    source:\n      type: Binary\n      binary:\n    strategy:\n      type: Source\n      sourceStrategy:\n        from:\n          kind: ImageStreamTag\n          name: s2i-java:latest\n    triggers: {}\n')),Object(o.b)("h3",{id:"deployment-configuration"},"Deployment configuration"),Object(o.b)("p",null,"The DeploymentConfig resource defines:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The deployment strategy, defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"Rolling")),Object(o.b)("li",{parentName:"ol"},"The container configuration\na. The image to use to create the container; this must match with the ImageStream output defined above\nb. TCP/UDP ports to expose; in this case port ",Object(o.b)("inlineCode",{parentName:"li"},"8080")," is open at container level\nc. The ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.org/latest/dev_guide/application_health.html"}),Object(o.b)("inlineCode",{parentName:"a"},"readinessProbe"))," detects if the container is unhealthy\nd. Container environment variables can be defined in clear text (ie ",Object(o.b)("inlineCode",{parentName:"li"},"LOG4J_FILE"),") or loaded from a secret key reference; secrects are managed by the Foundation Staff and are normally used to manage credentials used to access the external APIs."),Object(o.b)("li",{parentName:"ol"},"The deployment configuration ",Object(o.b)("inlineCode",{parentName:"li"},"trigger"),", pointing to the ",Object(o.b)("inlineCode",{parentName:"li"},"latest")," tag of an image called ",Object(o.b)("inlineCode",{parentName:"li"},"${BOT_NAME}"))),Object(o.b)("p",null,"See the example below."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'- apiVersion: v1\n  kind: DeploymentConfig\n  metadata:\n    labels:\n      app: ${BOT_NAME}\n    name: ${BOT_NAME}\n  spec:\n    replicas: 1\n    selector:\n      app: ${BOT_NAME}\n      deploymentconfig: ${BOT_NAME}\n    strategy:\n      rollingParams:\n        intervalSeconds: 1\n        maxSurge: 25%\n        maxUnavailable: 25%\n        timeoutSeconds: 600\n        updatePeriodSeconds: 1\n      type: Rolling\n    template:\n      metadata:\n        labels:\n          app: ${BOT_NAME}\n          deploymentconfig: ${BOT_NAME}\n      spec:\n        containers:\n        - image: ${BOT_NAME}:latest\n          imagePullPolicy: Always\n          name: ${BOT_NAME}\n          ports:\n          - containerPort: 8080\n            protocol: TCP\n          readinessProbe:\n            httpGet:\n              path: "/healthcheck"\n              port: 8080\n            initialDelaySeconds: 15\n            timeoutSeconds: 1\n          env:\n          - name: LOG4J_FILE\n            value: "/opt/openshift/log4j.properties"\n          - name: TRUSTSTORE_PASSWORD\n            valueFrom:\n              secretKeyRef:\n                name: ${BOT_NAME}.certs\n                key: truststore.password\n          ...\n        ...\n    ...\n    triggers:\n    - type: ConfigChange\n    - imageChangeParams:\n        automatic: true\n        containerNames:\n        - ${BOT_NAME}\n        from:\n          kind: ImageStreamTag\n          name: ${BOT_NAME}:latest\n      type: ImageChange\n  status: {}\n')),Object(o.b)("h3",{id:"service-definition"},"Service definition"),Object(o.b)("p",null,"In order to access the container port, it is necessary to define"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"a Service that acts as load-balancer across all containers with app=${BOT_NAME} label"),Object(o.b)("li",{parentName:"ol"},"a Route that registers to the OpenShift DNS and points to the Service")),Object(o.b)("p",null,"See the example below."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"- apiVersion: v1\n  kind: Service\n  metadata:\n    annotations:\n      openshift.io/generated-by: OpenShiftNewApp\n    labels:\n      app: ${BOT_NAME}\n    name: ${BOT_NAME}\n  spec:\n    ports:\n    - name: healthcheck-tcp\n      port: 8080\n      protocol: TCP\n      targetPort: 8080\n    selector:\n      app: ${BOT_NAME}\n      deploymentconfig: ${BOT_NAME}\n    sessionAffinity: None\n    type: ClusterIP\n  status:\n    loadBalancer: {}\n- apiVersion: v1\n  kind: Route\n  metadata:\n    name: ${BOT_NAME}\n    labels:\n      app: ${BOT_NAME}\n  spec:\n    to:\n      kind: Service\n      name: ${BOT_NAME}\n      weight: 100\n    port:\n      targetPort: healthcheck-tcp\n    wildcardPolicy: None\n")),Object(o.b)("h2",{id:"openshift-console"},"Openshift Console"),Object(o.b)("p",null,"The Open Developer Platform provides access to a FINOS ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.openshift.com/products/container-platform/"}),"OpenShift Container Platform")," instance (also called FINOS OpenShift Console), the leading enterprise Kubernetes distribution, so that developers can try out integrations with other containers, build and test containerised architectures and enable continuously deployed code build pipelines."),Object(o.b)("p",null,"Access is granted (free of charge) to all FINOS project teams (see below); in this page we guide contributors to request access, understand the OpenShift FINOS setup and execute the first tests."),Object(o.b)("img",{alt:"openshift-console",src:Object(r.a)("img/vendors/openshift-console.png")}),Object(o.b)("h2",{id:"how-to-get-access"},"How to get access"),Object(o.b)("p",null,"In order to access the FINOS OpenShift Console, it is necessary to comply with the following requirements:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"You must be part of a ",Object(o.b)("a",{href:Object(r.a)("project-collaboration#teams")},"FINOS project team")),Object(o.b)("li",{parentName:"ol"},"You must have an account on developers.redhat.com; you can also sign up with your GitHub credentials")),Object(o.b)("p",null,"To request access, send an email to help@finos.org, with the following info:\n1. Name, surname and company\n2. Corporate email address\n3. GitHub ID\n4. Red Hat Login ID (when logged into Red Hat Developers portal, go to the account page)\n5. FINOS Project team you are part of"),Object(o.b)("p",null,"The FINOS Infra team will create a project for your project, grant permissions to your Red Hat user and notify you via email the link to access the FINOS OpenShift Console."),Object(o.b)("h2",{id:"useful-commands"},"Useful commands"),Object(o.b)("p",null,"Below are some commands we found useful while setting up our Symphony bots on OpenShift Online, using the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/3.9/cli_reference/get_started_cli.html"}),"OpenShift CLI (",Object(o.b)("inlineCode",{parentName:"a"},"oc"),")"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"# Login on FINOS OpenShift - copy from https://console.pro-us-east-1.openshift.com/console/command-line\nexport OC_TOKEN=...\noc login https://api.pro-us-east-1.openshift.com --token=$OC_TOKEN\n \n# List of projects\noc projects\n \n# Select a specific project; all next commands will refer to that project\noc project my_bot\n \n# Show list of services, builds, pods and deployments for the current project\noc status\n \n# Import an image from Docker Hub\noc import-image maoo/s2i-java-binary --all --confirm\n \n# Processes an OpenShift template definition and passes parameter values\noc process -f bot_template.yaml -p BOT_NAME=my_botname | oc create -f -\n \n# Start an OpenShift build, passing an archive or a folder\noc start-build my_botname --from-archive=./target/archive.zip --wait=true\noc start-build my_botname --from-dir=./target/my_botname --wait=true\n \n# Deletes all resources with label 'app' equals to 'my_botname'\noc delete all -l app=my_botname\n")))}b.isMDXComponent=!0},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,u=b["".concat(r,".").concat(d)]||b[d]||m[d]||o;return n?i.a.createElement(u,l({ref:t},c,{components:n})):i.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},176:function(e,t,n){"use strict";var a=n(0),i=n(56);t.a=function(){return Object(a.useContext)(i.a)}},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(178);var a=n(176);function i(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},178:function(e,t,n){"use strict";var a=n(8),i=n(20),o=n(179),r="".startsWith;a(a.P+a.F*n(180)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return r?r.call(t,a,n):t.slice(n,n+a.length)===a}})},179:function(e,t,n){var a=n(76),i=n(28);e.exports=function(e,t,n){if(a(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(e))}},180:function(e,t,n){var a=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,!"/./"[e](t)}catch(i){}}return!0}}}]);