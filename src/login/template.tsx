import { Card } from "@/components/ui/card"
import { CustomPageProps } from "@/types"

 export function Template (props: CustomPageProps) {
    const {children, kcContext} = props;
    const {realm} = kcContext
  

    return (
        <div className="flex items-center justify-center h-screen bg-amber-700">
            <div className="max-w-[400px] min-w-[400px]">
                <Card  className="p-4">
                    
                    {children}

                </Card>
                <div className="flex">

                    <div>Realm displayName: {realm.displayName}</div>
                  

                </div>
            </div>
        </div>
    )
 }
