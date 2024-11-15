import { APP_PREFIX_PATH } from 'constants/route.constant'
import { NAV_ITEM_TYPE_TITLE, NAV_ITEM_TYPE_COLLAPSE, NAV_ITEM_TYPE_ITEM } from 'constants/navigation.constant'
import { ADMIN, USER } from 'constants/roles.constant'

const appsNavigationConfig = [
	{
		key: 'apps',
		path: '',
		title: 'APPS',
		translateKey: 'nav.apps',
		icon: 'apps',
		type: NAV_ITEM_TYPE_TITLE,
		authority: [ADMIN, USER],
		subMenu: [
			{
				key: 'apps.project',
				path: '',
				title: 'Project',
				translateKey: 'nav.appsProject.project',
				icon: 'project',
				type: NAV_ITEM_TYPE_COLLAPSE,
				authority: [ADMIN, USER],
				subMenu: [
					
					
					{
						key: 'appsProject.scrumBoard',
						path: `${APP_PREFIX_PATH}/project/scrum-board`,
						title: 'Scrum Board',
						translateKey: 'nav.appsProject.scrumBoard',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					
				]
			}
			
		]
	}
]

export default appsNavigationConfig