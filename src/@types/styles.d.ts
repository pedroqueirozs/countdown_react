/* styles.d.ts 
Este arquivo significa que eu so vou ter códigos de definição do type script
Codigo especifico do Type Script
Este e um aquivo de definição de tipos- so tem tipagem
*/
import "styled-components"
import {defaultTheme} from "../styles/themes/default"

type ThemeType = typeof defaultTheme

declare module 'styled-components'{
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    export interface DefaultTheme extends ThemeType{}
    
}