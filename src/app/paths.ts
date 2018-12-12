export class Paths {

    public static readonly EMPTY_SYMBOL: string = '';
    public static readonly WILDCARD_SYMBOL: string = '**';

    public static readonly WELCOME_SYMBOL: string = 'welcome';
    public static readonly WELCOME_PATH: string = '/' + Paths.WELCOME_SYMBOL;
    public static readonly SIGN_IN_SYMBOL: string = 'sign-in';
    public static readonly SIGN_IN_PATH: string = '/' + Paths.SIGN_IN_SYMBOL;
    public static readonly REGISTER_SYMBOL: string = 'register';
    public static readonly REGISTER_PATH: string = '/' + Paths.REGISTER_SYMBOL;
    public static readonly MAIN_SYMBOL: string = 'main';
    public static readonly MAIN_PATH: string = '/' + Paths.MAIN_SYMBOL;
    public static readonly CLASSES_SYMBOL: string = 'classes';
    public static readonly MAIN_CLASSES_PATH: string = Paths.MAIN_PATH + '/' + Paths.CLASSES_SYMBOL;
    public static readonly TEACHERS_SYMBOL: string = 'teachers';
    public static readonly MAIN_TEACHERS_PATH: string = Paths.MAIN_PATH + '/' + Paths.TEACHERS_SYMBOL;
    public static readonly STUDENTS_SYMBOL: string = 'students';
    public static readonly MAIN_STUDENTS_PATH: string = Paths.MAIN_PATH + '/' + Paths.STUDENTS_SYMBOL;
    public static readonly SCHOOLMATES_SYMBOL: string = 'schoolmates';
    public static readonly MAIN_SCHOOLMATES_PATH: string = Paths.MAIN_PATH + '/' + Paths.SCHOOLMATES_SYMBOL;

    constructor() { }
}
