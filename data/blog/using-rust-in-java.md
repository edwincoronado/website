---
title: Using Rust in Java
date: '2022-01-23'
tags: ['rust', 'java', 'jni', 'development', 'coding', 'tutorial']
draft: false
summary: Quickstart guide to using Rust JNI
layout: PostLayout
---

# Introduction

Rust has gained a lot of traction in the past few years and much of it can be accredited to not only performance but its really awesome tooling and available crates to get all types of jobs done. In the past, building projects written in system-level languages such as C and C++ could prove to be challenging, specially when targeting multiple architectures. Rust's `rustup` and `cargo` make this a breeze.

I recently found myself working on a proof-of-concept in which for performance reasons (and frankly because Java couldn't do what I needed) I found myself having to use [JNI](https://en.wikipedia.org/wiki/Java_Native_Interface). My first stab at this was using C. It was definitely fast, but not being a systems or "low-level" developer myself I quickly became frustrated trying to figure out all the necessary code to get my CMake/Makfile/gcc/etc.. configurations to build properly.

That's when [Rust JNI](https://docs.rs/jni/latest/jni/) came to the rescue! It made the process of writing and building the native libraries much easier so I could spend my time writing code and not breaking my head trying to build it.

In this tutorial I will go through 3 different iterations of getting Rust to communicate with Java:

1. [Returning a Java primitive](#returning-a-java-primitive)
2. [Returning a Java array](#returning-a-java-array)
3. [Returning a Java custom object](#returning-a-java-custom-object)

## Prerequisites

To keep this tutorial nice and simple, I will assume you have [installed Rust](https://rustup.rs/) and have an open Java project. I am using [Visual Studio Code](https://code.visualstudio.com/) with the [`rust-analyzer`](https://marketplace.visualstudio.com/items?itemName=matklad.rust-analyzer) extension installed for writing Rust and [Intellij IDEA Community Edition](https://www.jetbrains.com/idea/download/other.html) for Java.

# Tutorial

## Setup

Start by running `cargo new --lib java-jni --vcs none`. This will create a new directory with the name `java-jni`. The `--lib` argument tells cargo that this is a library and `--vcs none` prevents cargo from creating a new git repo. After running the command your directory structure should look something like this:

```sh
java-jni
├── Cargo.toml
└── src
    └── lib.rs
```

In `Cargo.toml` do the following:

1. Add `jni = "0.19.0"` to the `[dependencies]` section
2. Add the following new section
   ```yaml
   [lib]
   crate_type = ["cdylib"]
   ```

At this point your `Cargo.toml` file should look something like this:

```yaml
[package]
name = "java_jni"
version = "0.1.0"
edition = "2021"

[lib]
crate_type = ["cdylib"]

[dependencies]
jni = "0.19.0"
```

## Returning a Java primitive

Assuming that you have already created a Java project, let's begin by creating a new class called `RustJNI.java` with the following code:

```java
class RustJNI {

    static {
        System.loadLibrary("java_jni");
    }

    private static native int square(int input);

    public static void main(String... args) {
        int squared = square(3);
        System.out.println(squared);
    }
}
```

The `static` block calls the `System#loadLibrary` method that searches for a file named `libjava_jni.dylib` in the path provided to the JVM property `java.library.path` (more on that to come). The `native` keyword in the `#square` method tells Java to use such native library to execute the function, hence the empty method's body. The rest is just "normal" Java.
