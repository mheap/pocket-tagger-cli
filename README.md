# pocket-tagger-cli

This is a CLI for [pocket-tagger](https://github.com/mheap/pocket-tagger), a 
library that allows you to tag your pocket articles using user defined rules.
For an example rule configuration file, see [tagger.json](example/tagger.json).

## Installation

Install `pocket-tagger-cli` using `npm`:

```bash
npm install -g pocket-tagger-cli
```

### Authenticating with Pocket

This tool reads your credentials from `~/.pocket/credentials`. You must create 
a file at this location with the following format:

```
[default]
access_token=abc-def-ghi-jkl-mno
consumer_key=123-afie0r3h9r30320fr
```

If you need to generate an access token and consumer key,
[pocket-auth-cli](https://github.com/mheap/pocket-auth-cli) may be useful.

## Running the tool

You can run `pocket-tagger --help` at any time to see the available options. 
If this is the first time you're running the tool you'll need to generate an 
example tagger config using the following command:

```bash
pocket-tagger --generate ~/.pocket/tagger.json
```

Once you have a config, you can run the tool by running `pocket-tagger` without
any arguments. The default config contains tags for article length, a few 
programming languages and sites such as youtube. It also caches the contents of
each site in `/tmp` for 1 day. This allows you to edit your tagging rules without
needing to download the contents of every site each time.
