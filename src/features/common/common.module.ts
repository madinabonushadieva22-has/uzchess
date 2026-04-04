import { Module } from '@nestjs/common';
import { AuthorsModule } from './authors/authors.module';
import { CountriesModule } from './countries/countries.module';
import { DifficultiesModule } from './difficulties/difficulties.module';
import { LanguageModule } from './language/language.module';
import { TermsModule } from './terms/terms.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthorsModule,
    CountriesModule,
    DifficultiesModule,
    LanguageModule,
    TermsModule,
    UsersModule,
  ],
  exports: [
    AuthorsModule,
    CountriesModule,
    DifficultiesModule,
    LanguageModule,
    TermsModule,
    UsersModule,
  ],
})
export class CommonModule {}
