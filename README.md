# servicemesh-plugin
OpenShift Dynamic Plugin for ServiceMesh

## Local development

In one terminal window, run:

1. `yarn install`
2. `yarn run start`

In another terminal window, run:

1. `oc login`
2. `yarn run start-console` (requires [Docker](https://www.docker.com) or [podman](https://podman.io))

This will run the OpenShift console in a container connected to the cluster
you've logged into. The plugin HTTP server runs on port 9001 with CORS enabled.


```sh
oc patch consoles.operator.openshift.io cluster --patch '{ "spec": { "plugins": ["servicemesh"] } }' --type=merge
```
