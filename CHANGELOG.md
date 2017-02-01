# Change Log
All notable changes to this project will be documented in this file. Bwaaa ha ha ha! No they won't! This is my study sandbox, I'd spend more time writing changelogs than actually learning anything. However, for the record, this is a placeholder changelog format that I *will* use when I build any real projects. 

The format is based on [Keep a Changelog](http://keepachangelog.com/) 
and this project adheres to [Semantic Versioning](http://semver.org/).

My only exception to Sematic Versioning, is that all version numbers below 1 can contain breaking changes until the functionality stabilises, at which point version 1 and greater will follow `semver` guidelines.

All sample version numbers below are fictitious and are a placeholder only, copied from my `generator-gf` project which I do keep up to date.

## [Unreleased]

- to be defined.

## [0.0.5] - 2017-02-01

### Added
- Support page names with hyphens, convert the name into camelcase so that the generated `{pagename}Page` class is valid. e.g. `my-games` becomes `class myGamesPage` instead of `class my-gamesPage`.

## [0.0.4] - 2017-02-01

### Changed
- fix incorrect documentation stating that the default command is `yo gf i2 {pagename}` that doesnt work. Correct syntax requires colon i.e. `yo gf:i2 {pagename}`

## [0.0.3] - 2017-01-31
### Added
- first useful generator, `yo gf i2 {pagename}` that generates the 1 folder + 3 files.
