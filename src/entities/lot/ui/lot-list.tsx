import { For } from 'solid-js'
import { Lot } from 'entities/lot/ui/lot'
import { InitStore } from 'shared/model'

interface LotListProps {
    data: InitStore
    listType: 'property' | 'transport' | 'equipment' | 'furniture' | 'electronics' | 'building' | 'intangible'
}


export const LotList = ({ data, listType }: LotListProps ) => {
    return (
        <For each={data[listType]} fallback={<p>Loading...</p>}>{(lot) =>
            <Lot
                {...lot}
            />
        }
        </For>
    )
}

