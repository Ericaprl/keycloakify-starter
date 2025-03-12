import { I18n } from "keycloakify/login/i18n";
import { KcContext } from "keycloakify/login/KcContext";
import { TemplateProps } from "keycloakify/login/TemplateProps";
import React from "react";



export type CustomPageProps = Omit<TemplateProps<KcContext, I18n>, "doUseDefaultCss" | "headerNode">;

export type PageProps<T> = {
    KcContext:Extract<KcContext,{pageId: T}>;
    i18n:I18n,
    Template: (props: CustomPageProps) => React.JSX.Element,
}