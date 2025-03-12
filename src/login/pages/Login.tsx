import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageProps } from "@/types";


export function LoginPage(props: PageProps<"login.ftl">) {
  const { KcContext, i18n, Template } = props;
  const { url, messagesPerField, realm} = KcContext;
  const {loginWithEmailAllowed}  = realm;
  const { msgStr } = i18n;

  return (
    <Template kcContext={KcContext} i18n={i18n}>
      <div>
        <form action={url.loginAction} method="post" className="flex flex-col gap-6">


          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold">{realm.displayName}</h1>
          </div>

          <div className="grid gap-6">
            
            <div className="space-y-2">
              <Label htmlFor="username">{loginWithEmailAllowed  ? msgStr('email') : msgStr('usernameOrEmail') }</Label>

              <Input id="username" name="username" required />
                
                {messagesPerField.existsError('username') && (
                  <span className="text-sm text-red-500">
                    {messagesPerField.getFirstError('username')}
                  </span>
                )}

            </div>

            <div className="space-y-2">
              <Label htmlFor="password">{msgStr('password')}</Label>
              <Input id="password" name="password" type="password" required />
                {messagesPerField.existsError('password') && (
                  <span className="text-sm text-red-500">
                    {messagesPerField.getFirstError('password')}
                  </span>
                )}
            </div>

            <Button type="submit" className="w-full bg-info text-info-foreground">
              {msgStr('doLogIn')}
            </Button>
          </div>
        </form>
      </div>
    </Template>
  );
}



