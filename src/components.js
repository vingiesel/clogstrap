import _ from 'lodash';
import Classnames from 'classnames';

export function Grid(props){
	var class_name = props.fluid ? 'container-fluid' : 'container';
	var class_list = Classnames(props.className, class_name);
	var safe_props = _.omit(props, 'fluid');
	return <div {...safe_props} className={class_list}>{props.children}</div>
}

export function Row(props){
	var class_list = Classnames(props.className, 'row');
	return <div {...props} className={class_list}>{props.children}</div>
}

export function Col(props){
	var leftover_props = {};
	var class_list = _.map(props, (val, key)=>{
		if(_.includes(['xs', 'sm', 'md', 'lg'], key)){
			return `col-${key}-${val}`;
		} else if (_.includes(['xsOffset', 'smOffset', 'mdOffset', 'lgOffset'], key)){
			return `col-${_.kebabCase(key)}-${val}`;
		} 
		leftover_props[key] = val
		return false
	});

	var class_string = Classnames(...class_list, props.className);

	return <div {...leftover_props} className={class_string}>{props.children}</div>
}