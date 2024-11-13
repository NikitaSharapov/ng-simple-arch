# Angular MVC архитектура

MVC — это архитектурный/проектный шаблон, который разделяет приложение на три основных логических компонента: Model, View и Controller. Каждый архитектурный компонент создан для обработки определенных аспектов разработки приложения

### Модель
Модель — это простое представление схемы сущности, которое выражается типом или интерфейсом. В контексте просто архитектуры Angular, модели являются общими для всего проекта

### Представление
Представление в Angular состоит из HTML-шаблонов, которые определяют пользовательский интерфейс приложения. Оно представляет собой уровень представления и отвечает за рендеринг данных из Модели пользователю. Представления в Angular являются динамическими и реактивными, плавно обновляясь в ответ на изменения в данных

### Контроллер
В Angular контроллер часто представлен компонентами или директивами. Они действуют как посредники между Видом и Моделью, облегчая коммуникацию и обработку взаимодействий с пользователем. Контроллеры в Angular в первую очередь сосредоточены на управлении потоком данных и бизнес-логикой, гарантируя, что приложение будет адекватно реагировать на действия пользователя.

### Служба
Служба — это широкая категория, охватывающая любую ценность, функцию или свойство, которые нужны приложению. Служба — это, как правило, класс с узкой, четко определенной целью. Она должна делать что-то конкретное и делать это хорошо. Служба в рамках простого MVC в Angular может являтся и классом реализующим какую-то бизнес логику в приложении и поставщиков данных из разных источников. Для уменьшения связанности реализаций контроллера и службы я предлагаю использовать DIP (Dependency inversion principle) при написании сервисов.

### Принцип инверсии зависимостей
Принцип инверсии зависимостей (англ. Dependency Inversion Principle, DIP) — важный принцип объектно-ориентированного программирования, используемый для уменьшения связанности в компьютерных программах. Входит в пятёрку принципов S.O.L.I.D.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
