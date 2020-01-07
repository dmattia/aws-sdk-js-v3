import {
  CloseTunnelCommandInput,
  CloseTunnelCommandOutput
} from "../commands/CloseTunnelCommand";
import {
  DescribeTunnelCommandInput,
  DescribeTunnelCommandOutput
} from "../commands/DescribeTunnelCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ListTunnelsCommandInput,
  ListTunnelsCommandOutput
} from "../commands/ListTunnelsCommand";
import {
  OpenTunnelCommandInput,
  OpenTunnelCommandOutput
} from "../commands/OpenTunnelCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  CloseTunnelRequest,
  CloseTunnelResponse,
  ConnectionState,
  DescribeTunnelRequest,
  DescribeTunnelResponse,
  DestinationConfig,
  LimitExceededException,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTunnelsRequest,
  ListTunnelsResponse,
  OpenTunnelRequest,
  OpenTunnelResponse,
  ResourceNotFoundException,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TimeoutConfig,
  Tunnel,
  TunnelSummary,
  UntagResourceRequest,
  UntagResourceResponse
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1CloseTunnelCommand(
  input: CloseTunnelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "IoTSecuredTunneling.CloseTunnel";
  let body: any = {};
  const wrappedBody: any = {
    CloseTunnelRequest: serializeAws_json1_1CloseTunnelRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CloseTunnel",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeTunnelCommand(
  input: DescribeTunnelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "IoTSecuredTunneling.DescribeTunnel";
  let body: any = {};
  const wrappedBody: any = {
    DescribeTunnelRequest: serializeAws_json1_1DescribeTunnelRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeTunnel",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "IoTSecuredTunneling.ListTagsForResource";
  let body: any = {};
  const wrappedBody: any = {
    ListTagsForResourceRequest: serializeAws_json1_1ListTagsForResourceRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListTagsForResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListTunnelsCommand(
  input: ListTunnelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "IoTSecuredTunneling.ListTunnels";
  let body: any = {};
  const wrappedBody: any = {
    ListTunnelsRequest: serializeAws_json1_1ListTunnelsRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListTunnels",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1OpenTunnelCommand(
  input: OpenTunnelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "IoTSecuredTunneling.OpenTunnel";
  let body: any = {};
  const wrappedBody: any = {
    OpenTunnelRequest: serializeAws_json1_1OpenTunnelRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/OpenTunnel",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "IoTSecuredTunneling.TagResource";
  let body: any = {};
  const wrappedBody: any = {
    TagResourceRequest: serializeAws_json1_1TagResourceRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/TagResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "IoTSecuredTunneling.UntagResource";
  let body: any = {};
  const wrappedBody: any = {
    UntagResourceRequest: serializeAws_json1_1UntagResourceRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UntagResource",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_1CloseTunnelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CloseTunnelCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CloseTunnelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CloseTunnelResponse(
    data.CloseTunnelResponse,
    context
  );
  const response: CloseTunnelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CloseTunnelResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CloseTunnelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CloseTunnelCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.envoy.frontend#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.envoy.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeTunnelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTunnelCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeTunnelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTunnelResponse(
    data.DescribeTunnelResponse,
    context
  );
  const response: DescribeTunnelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTunnelResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeTunnelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTunnelCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.envoy.frontend#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.envoy.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(
    data.ListTagsForResourceResponse,
    context
  );
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.envoy.frontend#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.envoy.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListTunnelsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTunnelsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTunnelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTunnelsResponse(
    data.ListTunnelsResponse,
    context
  );
  const response: ListTunnelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTunnelsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTunnelsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTunnelsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.envoy.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1OpenTunnelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OpenTunnelCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1OpenTunnelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1OpenTunnelResponse(
    data.OpenTunnelResponse,
    context
  );
  const response: OpenTunnelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "OpenTunnelResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1OpenTunnelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OpenTunnelCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.envoy.frontend#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.envoy.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(
    data.TagResourceResponse,
    context
  );
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.envoy.frontend#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.envoy.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(
    data.UntagResourceResponse,
    context
  );
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.envoy.frontend#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.envoy.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    output.body,
    context
  );
  const contents: LimitExceededException = {
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
    output.body,
    context
  );
  const contents: ResourceNotFoundException = {
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1CloseTunnelRequest = (
  input: CloseTunnelRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.delete !== undefined) {
    bodyParams["delete"] = input.delete;
  }
  if (input.tunnelId !== undefined) {
    bodyParams["tunnelId"] = input.tunnelId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeTunnelRequest = (
  input: DescribeTunnelRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.tunnelId !== undefined) {
    bodyParams["tunnelId"] = input.tunnelId;
  }
  return bodyParams;
};

const serializeAws_json1_1DestinationConfig = (
  input: DestinationConfig,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.services !== undefined) {
    bodyParams["services"] = serializeAws_json1_1ServiceList(
      input.services,
      context
    );
  }
  if (input.thingName !== undefined) {
    bodyParams["thingName"] = input.thingName;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTunnelsRequest = (
  input: ListTunnelsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.thingName !== undefined) {
    bodyParams["thingName"] = input.thingName;
  }
  return bodyParams;
};

const serializeAws_json1_1OpenTunnelRequest = (
  input: OpenTunnelRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.destinationConfig !== undefined) {
    bodyParams["destinationConfig"] = serializeAws_json1_1DestinationConfig(
      input.destinationConfig,
      context
    );
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
  }
  if (input.timeoutConfig !== undefined) {
    bodyParams["timeoutConfig"] = serializeAws_json1_1TimeoutConfig(
      input.timeoutConfig,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ServiceList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  let bodyParams: any = {};
  if (input.key !== undefined) {
    bodyParams["key"] = input.key;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TagResourceRequest = (
  input: TagResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1TimeoutConfig = (
  input: TimeoutConfig,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.maxLifetimeTimeoutMinutes !== undefined) {
    bodyParams["maxLifetimeTimeoutMinutes"] = input.maxLifetimeTimeoutMinutes;
  }
  return bodyParams;
};

const serializeAws_json1_1UntagResourceRequest = (
  input: UntagResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  if (input.tagKeys !== undefined) {
    bodyParams["tagKeys"] = serializeAws_json1_1TagKeyList(
      input.tagKeys,
      context
    );
  }
  return bodyParams;
};

const deserializeAws_json1_1CloseTunnelResponse = (
  output: any,
  context: __SerdeContext
): CloseTunnelResponse => {
  let contents: any = {
    __type: "CloseTunnelResponse"
  };
  return contents;
};

const deserializeAws_json1_1ConnectionState = (
  output: any,
  context: __SerdeContext
): ConnectionState => {
  let contents: any = {
    __type: "ConnectionState",
    lastUpdatedAt: undefined,
    status: undefined
  };
  if (output.lastUpdatedAt !== undefined) {
    contents.lastUpdatedAt = new Date(
      output.lastUpdatedAt % 1 != 0
        ? Math.round(output.lastUpdatedAt * 1000)
        : output.lastUpdatedAt
    );
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1DescribeTunnelResponse = (
  output: any,
  context: __SerdeContext
): DescribeTunnelResponse => {
  let contents: any = {
    __type: "DescribeTunnelResponse",
    tunnel: undefined
  };
  if (output.tunnel !== undefined) {
    contents.tunnel = deserializeAws_json1_1Tunnel(output.tunnel, context);
  }
  return contents;
};

const deserializeAws_json1_1DestinationConfig = (
  output: any,
  context: __SerdeContext
): DestinationConfig => {
  let contents: any = {
    __type: "DestinationConfig",
    services: undefined,
    thingName: undefined
  };
  if (output.services !== undefined) {
    contents.services = deserializeAws_json1_1ServiceList(
      output.services,
      context
    );
  }
  if (output.thingName !== undefined) {
    contents.thingName = output.thingName;
  }
  return contents;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  let contents: any = {
    __type: "ListTagsForResourceResponse",
    tags: undefined
  };
  if (output.tags !== undefined) {
    contents.tags = deserializeAws_json1_1TagList(output.tags, context);
  }
  return contents;
};

const deserializeAws_json1_1ListTunnelsResponse = (
  output: any,
  context: __SerdeContext
): ListTunnelsResponse => {
  let contents: any = {
    __type: "ListTunnelsResponse",
    nextToken: undefined,
    tunnelSummaries: undefined
  };
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  if (output.tunnelSummaries !== undefined) {
    contents.tunnelSummaries = deserializeAws_json1_1TunnelSummaryList(
      output.tunnelSummaries,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1OpenTunnelResponse = (
  output: any,
  context: __SerdeContext
): OpenTunnelResponse => {
  let contents: any = {
    __type: "OpenTunnelResponse",
    destinationAccessToken: undefined,
    sourceAccessToken: undefined,
    tunnelArn: undefined,
    tunnelId: undefined
  };
  if (output.destinationAccessToken !== undefined) {
    contents.destinationAccessToken = output.destinationAccessToken;
  }
  if (output.sourceAccessToken !== undefined) {
    contents.sourceAccessToken = output.sourceAccessToken;
  }
  if (output.tunnelArn !== undefined) {
    contents.tunnelArn = output.tunnelArn;
  }
  if (output.tunnelId !== undefined) {
    contents.tunnelId = output.tunnelId;
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ServiceList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    key: undefined,
    value: undefined
  };
  if (output.key !== undefined) {
    contents.key = output.key;
  }
  if (output.value !== undefined) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TagResourceResponse = (
  output: any,
  context: __SerdeContext
): TagResourceResponse => {
  let contents: any = {
    __type: "TagResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1TimeoutConfig = (
  output: any,
  context: __SerdeContext
): TimeoutConfig => {
  let contents: any = {
    __type: "TimeoutConfig",
    maxLifetimeTimeoutMinutes: undefined
  };
  if (output.maxLifetimeTimeoutMinutes !== undefined) {
    contents.maxLifetimeTimeoutMinutes = output.maxLifetimeTimeoutMinutes;
  }
  return contents;
};

const deserializeAws_json1_1Tunnel = (
  output: any,
  context: __SerdeContext
): Tunnel => {
  let contents: any = {
    __type: "Tunnel",
    createdAt: undefined,
    description: undefined,
    destinationConfig: undefined,
    destinationConnectionState: undefined,
    lastUpdatedAt: undefined,
    sourceConnectionState: undefined,
    status: undefined,
    tags: undefined,
    timeoutConfig: undefined,
    tunnelArn: undefined,
    tunnelId: undefined
  };
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(
      output.createdAt % 1 != 0
        ? Math.round(output.createdAt * 1000)
        : output.createdAt
    );
  }
  if (output.description !== undefined) {
    contents.description = output.description;
  }
  if (output.destinationConfig !== undefined) {
    contents.destinationConfig = deserializeAws_json1_1DestinationConfig(
      output.destinationConfig,
      context
    );
  }
  if (output.destinationConnectionState !== undefined) {
    contents.destinationConnectionState = deserializeAws_json1_1ConnectionState(
      output.destinationConnectionState,
      context
    );
  }
  if (output.lastUpdatedAt !== undefined) {
    contents.lastUpdatedAt = new Date(
      output.lastUpdatedAt % 1 != 0
        ? Math.round(output.lastUpdatedAt * 1000)
        : output.lastUpdatedAt
    );
  }
  if (output.sourceConnectionState !== undefined) {
    contents.sourceConnectionState = deserializeAws_json1_1ConnectionState(
      output.sourceConnectionState,
      context
    );
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.tags !== undefined) {
    contents.tags = deserializeAws_json1_1TagList(output.tags, context);
  }
  if (output.timeoutConfig !== undefined) {
    contents.timeoutConfig = deserializeAws_json1_1TimeoutConfig(
      output.timeoutConfig,
      context
    );
  }
  if (output.tunnelArn !== undefined) {
    contents.tunnelArn = output.tunnelArn;
  }
  if (output.tunnelId !== undefined) {
    contents.tunnelId = output.tunnelId;
  }
  return contents;
};

const deserializeAws_json1_1TunnelSummary = (
  output: any,
  context: __SerdeContext
): TunnelSummary => {
  let contents: any = {
    __type: "TunnelSummary",
    createdAt: undefined,
    description: undefined,
    lastUpdatedAt: undefined,
    status: undefined,
    tunnelArn: undefined,
    tunnelId: undefined
  };
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(
      output.createdAt % 1 != 0
        ? Math.round(output.createdAt * 1000)
        : output.createdAt
    );
  }
  if (output.description !== undefined) {
    contents.description = output.description;
  }
  if (output.lastUpdatedAt !== undefined) {
    contents.lastUpdatedAt = new Date(
      output.lastUpdatedAt % 1 != 0
        ? Math.round(output.lastUpdatedAt * 1000)
        : output.lastUpdatedAt
    );
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.tunnelArn !== undefined) {
    contents.tunnelArn = output.tunnelArn;
  }
  if (output.tunnelId !== undefined) {
    contents.tunnelId = output.tunnelId;
  }
  return contents;
};

const deserializeAws_json1_1TunnelSummaryList = (
  output: any,
  context: __SerdeContext
): Array<TunnelSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TunnelSummary(entry, context)
  );
};

const deserializeAws_json1_1UntagResourceResponse = (
  output: any,
  context: __SerdeContext
): UntagResourceResponse => {
  let contents: any = {
    __type: "UntagResourceResponse"
  };
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};