# Fitbit Clockface Template

A project template for Fitbit clock faces.

## Prerequisites

Installing [pnpm] is recommended for faster fetching of `node_modules`, but it is not required.

[pnpm]: https://pnpm.io/installation

## Usage

Clone this repository, then generate a new App ID for the clock face:

```
(p)npm install
(p)npm exec fitbit-build generate-appid
```

## Supported Devices

* Versa 3 (`atlas`)
* Sense (`vulcan`)
* Versa 4 (`hera`)
* Sense 2 (`rhea`)

A prerelease version of SDK 6 is used so that the clock face can be built for both the [Fitbit Simulator] and newer Fitbit devices.

[Fitbit Simulator]: https://dev.fitbit.com/release-notes/fitbit-os-simulator/

## License

This project template is made available under the MIT license.
