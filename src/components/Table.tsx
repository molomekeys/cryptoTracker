interface DataInterface {
id:'name'
name:'string'
price:'number'
}
interface Props {
    data:DataInterface[]
}
import {useTable} from 'react-table'
import {useMemo} from 'react'
const ColumnsTable=[{Header:'Name',accessor:'id'},
{Header:'price',accessor:'price'},
{Header:'icon',accessor:'icon',Cell:({value})=> (<div><img src={value}/> </div>) ,maxWidth:10},
]

const Table = (props:any) => {
  const dataTable=useMemo(()=> props.dataForTable,[])
  console.log(dataTable)
  const tableInstance=useTable({data:dataTable,columns:ColumnsTable});
  const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow}=tableInstance;
  console.log(tableInstance)
  return (
    <div className=" bg-slate-700 h-full  text-black w-full p-5 ">
       <table {...getTableProps()} className=" w-full bg-sky-900  ">
        <thead>
                {
                    headerGroups.map((headerGroup:any)=>(
                        <tr {...headerGroup.getHeaderGroupProps()} className="  border-b-2 rounded-md border-slate-500 ">

                            {
                                headerGroup.headers.map((column:any)=>(
                                    <th {...column.getHeaderProps()} className="border-r-2 rounded-md border-slate-500 text-slate-200 p-4"> {column.render('Header')}</th>

                             )
                              )  }
                        </tr>
                    )) }
        </thead>
        <tbody {...getTableBodyProps()}>
           {
            rows.map((row:any)=>{
                prepareRow(row)
                return (
                    <tr{...row.getRowProps()}>
                       { row.cells.map((cell:any)=>(
                       
                       
                       <td {...cell.getCellProps()} className="text-slate-300 border-r-2 roundedlg border-slate-500 text-lg font-medium p-4">
                            {cell.render('Cell')}

                       </td>))}
                    </tr>
                )
            })
           }

        </tbody>
       </table>
    </div>
  )
}
export default Table