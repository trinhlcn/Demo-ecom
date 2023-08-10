import { contains } from 'jquery';
import Gallery from '../../../components/gallery-template-a1/gallery-template-a1';

const dataFilter = [
    {
        key: '',
        label: 'All'
    },
    {
        key: 'facebook',
        label: 'Facebook ads'
    },
    {
        key: 'google-ads',
        label: 'Google Ads'
    },
    {
        key: 'google-analytics',
        label: 'Google Analytics'
    },
    {
        key: 'icon-sheets',
        label: 'Google Sheets'
    },
    {
        key: 'icon-haravan',
        label: 'Haravan'
    },
    {
        key: 'icon-shopee',
        label: 'Shopee'
    },
    {
        key: 'icon-tiki',
        label: 'Tiki'
    },
    {
        key: 'icon-kiotviet',
        label: 'KiotViet'
    },
    {
        key: 'icon-lazada',
        label: 'Lazada'
    },
    {
        key: 'icon-sapo',
        label: 'Sapo'
    },
    {
        key: 'icon-youtube',
        label: 'Youtube'
    }
];

const dataFilterSource = [
    {
        key: 'icon-facebook',
        label: 'Facebook Ads'
    },
    {
        key: 'google-ads',
        label: 'Google Ads'
    },
    {
        key: 'google-analytics',
        label: 'Google Analytics'
    },
    {
        key: 'icon-sheets',
        label: 'Google Sheet'
    },
    {
        key: 'icon-haravan',
        label: 'Haravan'
    },
    {
        key: 'icon-shopee',
        label: 'Shopee'
    },
    {
        key: 'icon-tiki',
        label: 'Tiki'
    },
    {
        key: 'icon-kiotviet',
        label: 'KiotViet'
    },
    {
        key: 'icon-lazada',
        label: 'Lazada'
    },
    {
        key: 'icon-sapo',
        label: 'Sapo'
    },
    {
        key: 'icon-youtube',
        label: 'Youtube'
    }
];

describe('Test gallery template', () => {
    const gallery = new Gallery();

    beforeEach(() =>{
        cy.login();
        cy.server();
        cy.getCookie(Cypress.env('COOKIE_USER')).then(cookie => {
            const user = JSON.parse(cookie.value);

            cy.visit(`${user.user_id}/report/gallery-template`);
            
        });
        cy.route('GET', '/v3.1/api/report/**').as('getTemplate');
    });

    it('Test filter data source', () => {
        cy.server();
        cy.route('GET', '/v3.1/api/report/**').as('getTemplate');
        cy.wait(3000)
        cy.contains('Gallery Template');
        gallery.onClickButtonToggle();
        gallery.onClickItemDropdown(3).then(item =>{
            gallery.getButtonToggle().should('include.text',item.text());
            cy.wait(3000);
            gallery.getDataApi('@getTemplate').then(data => {
                const {rows} = data;
                

                if (data && data.supportConnectors.length) {
                    const {supportConnectors} = data;
                    supportConnectors.map((connector, index) => {
                        cy.get('[class*=dropdown-connectors] .dropdown-menu .dropdown-item').eq(index + 1).contains(connector.connectorName)
                    })
                }
            });
        
        });
    
    });

    it('Test button Use activity', () => {
        cy.server();
        cy.route('GET', '/v3/package/api/client/user-package/**').as('getTemplate2');
        cy.route('GET', '/v3.1/api/datasource/**').as('dataSource');
        gallery.onHover(0);
        gallery.onClickUse();
        cy.wait('@getTemplate2');
        cy.wait('@dataSource');
        gallery.getDataApi('@dataSource').then(data => {
            const {dataSources} = data;
 
            if ( dataSources.length > 0) {
                dataSources.map(item => {
                    const label = dataFilterSource.find(data => data.label === item.connector.connectorName);

                    expect(label.key === item.connector.icon,'test value').equal(true);
                }); 
            }
        });

    });

});
