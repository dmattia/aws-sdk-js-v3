import {
  S3ControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../S3ControlClient";
import { DeletePublicAccessBlockRequest } from "../models/index";
import {
  deserializeAws_restXmlDeletePublicAccessBlockCommand,
  serializeAws_restXmlDeletePublicAccessBlockCommand
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer
} from "@aws-sdk/types";

export type DeletePublicAccessBlockCommandInput = DeletePublicAccessBlockRequest;
export type DeletePublicAccessBlockCommandOutput = __MetadataBearer;

export class DeletePublicAccessBlockCommand extends $Command<
  DeletePublicAccessBlockCommandInput,
  DeletePublicAccessBlockCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeletePublicAccessBlockCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeletePublicAccessBlockCommandInput,
    DeletePublicAccessBlockCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeletePublicAccessBlockCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlDeletePublicAccessBlockCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DeletePublicAccessBlockCommandOutput> {
    return deserializeAws_restXmlDeletePublicAccessBlockCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}