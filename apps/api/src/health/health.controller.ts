import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import type { HealthResponse } from "@fleetos/shared";

@ApiTags("health")
@Controller("health")
export class HealthController {
  @Get()
  @ApiOperation({ summary: "Service health check" })
  getHealth(): HealthResponse {
    return {
      status: "ok",
      service: "fleetos-api",
      version: "0.0.1",
      timestamp: new Date().toISOString(),
    };
  }
}
