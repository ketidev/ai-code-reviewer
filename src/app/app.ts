import { Component, inject, resource, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Gemini } from './gemini';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ai-code-reviewer');
  private geminiService = inject(Gemini);

  codeSnippet = signal<string>('');

  reviewResources = resource({
    params: () => this.codeSnippet(),
    loader: async ({ params: code }) => {
      if (code.length < 10) return 'Paste more code to begin...';
      return await this.geminiService.generateReview(code);
    },
  });
}
