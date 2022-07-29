# Dev Server Stuff 

Public Server Hostname: shiny-01.ddns.net

## Remote GUI for managing Docker (Portainer)
Go to: http://shiny-01.ddns.net:9000/

| User    | Password        | Port |
| ------- | --------------- | ---- |
| `admin` | `azWarwick2019` | 9000 |

Available ports for containers: **49152-65535**

These are ephemeral ports - basically we can mess with these ports as much as we want without messing important reserved ports up - like the Portainer port itself. All these ports have been forwarded hence they are available through the DNS/Public IP.

## Configuring PostgreSQL

**The container name is**: `projectn-db-dev`

ref: https://hackernoon.com/dont-install-postgres-docker-pull-postgres-bee20e200198

### PostgreSQL Remote Access

| User       | Password  | Port  |
| ---------- | --------- | ----- |
| `postgres` | `testDBn` | 49152 |

From the command line:

`psql -h shiny-01.ddns.net -p 49152 -U postgres`