import {
  HealthClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../HealthClient";
import {
  DescribeEventDetailsForOrganizationRequest,
  DescribeEventDetailsForOrganizationResponse
} from "../models/index";
import {
  deserializeAws_json1_1DescribeEventDetailsForOrganizationCommand,
  serializeAws_json1_1DescribeEventDetailsForOrganizationCommand
} from "../protocols/Aws_json1_1";
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
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type DescribeEventDetailsForOrganizationCommandInput = DescribeEventDetailsForOrganizationRequest;
export type DescribeEventDetailsForOrganizationCommandOutput = DescribeEventDetailsForOrganizationResponse;

export class DescribeEventDetailsForOrganizationCommand extends $Command<
  DescribeEventDetailsForOrganizationCommandInput,
  DescribeEventDetailsForOrganizationCommandOutput,
  HealthClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeEventDetailsForOrganizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HealthClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeEventDetailsForOrganizationCommandInput,
    DescribeEventDetailsForOrganizationCommandOutput
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
    input: DescribeEventDetailsForOrganizationCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeEventDetailsForOrganizationCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DescribeEventDetailsForOrganizationCommandOutput> {
    return deserializeAws_json1_1DescribeEventDetailsForOrganizationCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}