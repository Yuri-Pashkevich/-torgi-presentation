import { Accessor, For } from 'solid-js'
import { Lot } from 'entities/lot/ui/lot'
import { PageData } from 'shared/model'

interface LotListProps {
    data: Accessor<PageData[]> 
    count?: number
}

export const LotList = ({ data, count }: LotListProps ) => {

    console.log('render lotlist')

    if(count) {
        return (
            <For each={data().filter((it, i) => i < count)} fallback={<p>Loading...</p>}>{(lot) =>
                <Lot
                    {...lot}
                />
            }
            </For>
        )
    }

    return (
        <For each={data()} fallback={<p>Loading...</p>}>{(lot) =>
            <Lot
                {...lot}
            />
        }
        </For>
    )
}