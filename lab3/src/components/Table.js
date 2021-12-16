import React from 'react';

function DataTable(peoples) {
    return peoples.map((people)=>{
        const { id, name: rname } = people;
        return(
            <tr>
                <td>{id}</td>
                <td>{rname}</td>
            </tr>
        );
    });
}

function DataTable() {
    const studens = [
        { id: 1, name: "Win"},
        { id: 2, name: "MA"},
    ];
    return (
        <>
        <table>
            <tbody>{GenTable(studens)}</tbody>
                </table>
            </>
    );
}

export default DataTable;