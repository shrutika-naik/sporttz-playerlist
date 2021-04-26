import React from 'react';

import Card from '../shared/Card';

export default function PlayersList({filteredPlayer, loading, error}){
    return (
        <Card playerList={filteredPlayer} />
    )
}