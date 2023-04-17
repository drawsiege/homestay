import getCurrentUser from "@components/app/actions/getCurrentUser";
import getListingById from "@components/app/actions/getListingById";
import ClientOnly from "@components/app/components/ClientOnly";
import EmptyState from "@components/app/components/EmptyState";
import ListingClient from "./ListingClient";
import getReservations from "@components/app/actions/getReservations";

interface IParams {
    listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
    const listing = await getListingById(params);
    const reservations = await getReservations(params);
    const currentUser = await getCurrentUser();

    if (!listing) {
        return (
            <ClientOnly>
                <EmptyState />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <ListingClient
                listing={listing}
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default ListingPage;
