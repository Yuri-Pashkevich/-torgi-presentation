import { For } from 'solid-js'
import { Lot } from 'entities/lot/ui/lot'
import { InitStore } from 'shared/model'

interface LotListProps {
    data: InitStore
    listType: 'all' | 'estate' | 'transport' | 'equipment' | 'furniture' | 'electronics' | 'building' | 'intangible'
    count?: number
}


export const LotList = ({ data, listType, count }: LotListProps ) => {

    if(count) {
        return (
            <For each={data[listType].filter((it, i) => i < count)} fallback={<p>Loading...</p>}>{(lot) =>
                <Lot
                    {...lot}
                />
            }
            </For>
        )
    }

    return (
        <For each={data[listType]} fallback={<p>Loading...</p>}>{(lot) =>
            <Lot
                {...lot}
            />
        }
        </For>
    )
}

