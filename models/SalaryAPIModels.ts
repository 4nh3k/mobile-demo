export interface ProofCalculationRequest {
  identifier: string;
  salary: string;
  lower: number;
  upper: number;
}

export interface ProofCalculationResponse {
  error: boolean;
  data?: {
    proof: object;
    publicSignals: object;
  };
  msg?: string;
}

export interface VerifyRequest {
  proof: object;
  publicSignals: object;
}

export interface VerifyResponse {
  error: boolean;
  message: string;
  data?: {
    name: string;
    identifier: string;
    root: string;
    lower: number;
    upper: number;
  };
}

export interface FileUploadResponse {
  error: boolean;
  message: string;
}
