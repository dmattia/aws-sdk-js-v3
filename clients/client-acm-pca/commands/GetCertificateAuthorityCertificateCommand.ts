import {
  ACMPCAClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ACMPCAClient";
import {
  GetCertificateAuthorityCertificateRequest,
  GetCertificateAuthorityCertificateResponse
} from "../models/index";
import {
  deserializeAws_json1_1GetCertificateAuthorityCertificateCommand,
  serializeAws_json1_1GetCertificateAuthorityCertificateCommand
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

export type GetCertificateAuthorityCertificateCommandInput = GetCertificateAuthorityCertificateRequest;
export type GetCertificateAuthorityCertificateCommandOutput = GetCertificateAuthorityCertificateResponse;

export class GetCertificateAuthorityCertificateCommand extends $Command<
  GetCertificateAuthorityCertificateCommandInput,
  GetCertificateAuthorityCertificateCommandOutput,
  ACMPCAClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCertificateAuthorityCertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMPCAClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetCertificateAuthorityCertificateCommandInput,
    GetCertificateAuthorityCertificateCommandOutput
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
    input: GetCertificateAuthorityCertificateCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCertificateAuthorityCertificateCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<GetCertificateAuthorityCertificateCommandOutput> {
    return deserializeAws_json1_1GetCertificateAuthorityCertificateCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}