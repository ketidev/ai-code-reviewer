import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Gemini {
  private genAI = new GoogleGenerativeAI(environment.GEMINI_API_KEY);

  private model = this.genAI.getGenerativeModel({
    model: 'gemini-2.5-flash',
    systemInstruction: `You are a senior Angular 19 expect.
    Review code specifically for:
    - Signal usege (prefer signals over RXJS where applicable)
    - Standalone component pattern
    - Control flow syntax (@if, @for)
    - Performance and security
    Provide concise, and actionable bullet points.`,
  });

  async generateReview(code: string): Promise<string> {
    if (!code) return '';
    const result = await this.model.generateContent(code);
    return result.response.text();
  }
}
