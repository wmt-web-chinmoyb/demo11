import { render, screen } from "@testing-library/react";
import TransactionList from "./index";
import { renderWithRouter } from "../../setupTests";
describe('transactionList',()=>{
    test('render Correctly',()=>{
        renderWithRouter(<TransactionList />);
        const headingText=screen.getByTestId('header-title')
        expect(headingText).toBeInTheDocument()
        const subHeadingText=screen.getByTestId('subheader-title-1')
        expect(subHeadingText).toBeInTheDocument()
        const DownCircleOutlinedIcon1=screen.getByTestId('DownCircleOutlined-icon-1')
        expect(DownCircleOutlinedIcon1).toBeInTheDocument()
        const itemText1=screen.getByTestId('item-text-1')
        expect(itemText1).toBeInTheDocument()
        const itemDate1=screen.getByTestId('item-date-1')
        expect(itemDate1).toBeInTheDocument()
        const itemPrice1=screen.getByTestId('item-price-1')
        expect(itemPrice1).toBeInTheDocument()
        
        const itemText2=screen.getByTestId('item-text-2')
        expect(itemText2).toBeInTheDocument()
        const itemDate2=screen.getByTestId('item-date-2')
        expect(itemDate2).toBeInTheDocument()
        const itemPrice2=screen.getByTestId('item-price-2')
        expect(itemPrice2).toBeInTheDocument()
        const upCircleOutlinedIcon1=screen.getByTestId('UpCircleOutlined-icon-1')
        expect(upCircleOutlinedIcon1).toBeInTheDocument()

        const itemText3=screen.getByTestId('item-text-3')
        expect(itemText3).toBeInTheDocument()
        const itemDate3=screen.getByTestId('item-date-3')
        expect(itemDate3).toBeInTheDocument()
        const itemPrice3=screen.getByTestId('item-price-3')
        expect(itemPrice3).toBeInTheDocument()
        const DownCircleOutlinedIcon2=screen.getByTestId('DownCircleOutlined-icon-2')
        expect(DownCircleOutlinedIcon2).toBeInTheDocument()
        
        const itemText4=screen.getByTestId('item-text-4')
        expect(itemText4).toBeInTheDocument()
        const itemDate4=screen.getByTestId('item-date-4')
        expect(itemDate4).toBeInTheDocument()
        const itemPrice4=screen.getByTestId('item-price-4')
        expect(itemPrice4).toBeInTheDocument()
        const upCircleOutlinedIcon2=screen.getByTestId('UpCircleOutlined-icon-2')
        expect(upCircleOutlinedIcon2).toBeInTheDocument()

        const itemText5=screen.getByTestId('item-text-5')
        expect(itemText5).toBeInTheDocument()
        const itemDate5=screen.getByTestId('item-date-5')
        expect(itemDate5).toBeInTheDocument()
        const itemPrice5=screen.getByTestId('item-price-5')
        expect(itemPrice5).toBeInTheDocument()
        const DownCircleOutlinedIcon3=screen.getByTestId('DownCircleOutlined-icon-3')
        expect(DownCircleOutlinedIcon3).toBeInTheDocument()

        const itemText6=screen.getByTestId('item-text-6')
        expect(itemText6).toBeInTheDocument()
        const itemDate6=screen.getByTestId('item-date-6')
        expect(itemDate6).toBeInTheDocument()
        const itemPrice6=screen.getByTestId('item-price-6')
        expect(itemPrice6).toBeInTheDocument()
        const upCircleOutlinedIcon3=screen.getByTestId('UpCircleOutlined-icon-3')
        expect(upCircleOutlinedIcon3).toBeInTheDocument()

        const itemText7=screen.getByTestId('item-text-7')
        expect(itemText7).toBeInTheDocument()
        const itemDate7=screen.getByTestId('item-date-7')
        expect(itemDate7).toBeInTheDocument()
        const itemPrice7=screen.getByTestId('item-price-7')
        expect(itemPrice7).toBeInTheDocument()
        const upCircleOutlinedIcon4=screen.getByTestId('UpCircleOutlined-icon-4')
        expect(upCircleOutlinedIcon4).toBeInTheDocument()
    })
})