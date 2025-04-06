
# Zipkin installation in Docker

```shell
 docker run --rm -p 9411:9411 --name zipkin openzipkin/zipkin
```


# OpenTelemetry Packages for Node.js Tracing

This project uses **OpenTelemetry** to enable distributed tracing in a Node.js application. The following npm packages are installed for instrumentation and trace exporting.

##  Installed Packages

## `@opentelemetry/core`
Provides core types, interfaces, and base implementations used throughout the OpenTelemetry ecosystem.

## `@opentelemetry/node`
A preconfigured OpenTelemetry SDK for Node.js applications. It automatically registers instrumentation for supported modules and sets up tracing infrastructure.

### `@opentelemetry/plugin-http`
Instruments the built-in `http` module to create spans for incoming and outgoing HTTP requests.

### `@opentelemetry/plugin-https`
Instruments the built-in `https` module for HTTPS request and response tracing.

## `@opentelemetry/plugin-express`
Automatically creates spans for each middleware and route handler in an Express application.

## `@opentelemetry/tracing`
Provides classes and utilities to create custom `TracerProvider`, `Tracer`, and `SpanProcessor` instances. Useful for setting up tracing logic manually.

### `@opentelemetry/exporter-zipkin`
Exports trace data to a Zipkin backend. Converts OpenTelemetry traces into Zipkin format and sends them via HTTP.

##  Use Case

These packages are used to trace requests across services in a Node.js microservices architecture. Spans are automatically created for:
- Incoming API calls (via Express)
- Outgoing HTTP/HTTPS requests
- Custom operations (using `@opentelemetry/tracing`)

Traces are then exported to Zipkin for visualization and performance monitoring.

##  Example Workflow

1. Incoming HTTP request hits your Express route
2. Middleware and route handler spans are created
3. Outgoing HTTP call creates a child span
4. All spans are linked together into a trace
5. The trace is sent to Zipkin for visualization

##  Benefits

- Monitor service-to-service latency
- Identify bottlenecks and failures
- Gain visibility into the flow of requests across systems



## OpenTelemetry Nodejs Configuration

```https://opentelemetry.io/docs/languages/js/getting-started/nodejs/```



[Reference Tutorial](https://www.youtube.com/watch?v=r8UvWSX3KA8&t=18s)

