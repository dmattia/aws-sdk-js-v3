import {
  ServiceInputTypes,
  ServiceOutputTypes,
  TranscribeClientResolvedConfig
} from "../TranscribeClient";
import {
  CreateVocabularyFilterRequest,
  CreateVocabularyFilterResponse
} from "../models/index";
import {
  deserializeAws_json1_1CreateVocabularyFilterCommand,
  serializeAws_json1_1CreateVocabularyFilterCommand
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

export type CreateVocabularyFilterCommandInput = CreateVocabularyFilterRequest;
export type CreateVocabularyFilterCommandOutput = CreateVocabularyFilterResponse;

export class CreateVocabularyFilterCommand extends $Command<
  CreateVocabularyFilterCommandInput,
  CreateVocabularyFilterCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateVocabularyFilterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranscribeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateVocabularyFilterCommandInput,
    CreateVocabularyFilterCommandOutput
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
    input: CreateVocabularyFilterCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateVocabularyFilterCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<CreateVocabularyFilterCommandOutput> {
    return deserializeAws_json1_1CreateVocabularyFilterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}